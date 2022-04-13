import cookie from 'cookie'

export async function handle({ event, resolve }) {

  const cookies = cookie.parse(event.request.headers.get('cookie') || '');
  
  // code here happens before the endpoint or page is called
  event.locals.token = cookies.token;
  event.locals.user = cookies.user;
  event.locals.sId = cookies.sId;

  const response = await resolve(event);
  
  // code here happens after the endpoint or page is called
  response.headers['set-cookie'] = [`token=${event.locals.token || ''}; Path=/; HttpOnly`, `user=${event.locals.user || ''}; Path=/; HttpOnly`, `sId=${event.locals.sId || ''}; Path=/; HttpOnly`];

  return response;
}

export async function getSession(event) {
  return {
    token: event.locals.token,
    user: event.locals.user,
    sId: event.locals.sId
  };
};