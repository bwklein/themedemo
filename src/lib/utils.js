export function scrollTo(anchor) {
    document.querySelector("#" + anchor).scrollIntoView({
        behavior: 'smooth'
    });
}

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const slugFromPath = (path) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export function buildToC() {
  // Based on https://projectcodeed.blogspot.com/2020/04/an-automatic-table-of-contents.html
  
  // Get ToC div
  let toc = document.getElementById("ToC");
  
  //Add a header
  var tocHeader = document.createElement("a");
  tocHeader.classList.add("mb-2", "inline-block", "w-auto", "text-center", "bg-gray-50", "hover:bg-gray-100", "py-1", "px-2", "border")
  tocHeader.innerHTML = "<span class='material-icons-outlined text-sm font-bold text-gray-500 align-text-bottom'>vertical_align_top</span>";
  tocHeader.setAttribute("href","#top");
  tocHeader.setAttribute("title","To Top of Page");
  toc.appendChild(tocHeader);

  // Create a list for the ToC entries
  let tocList = document.createElement("ul");

  // Find the primary content section
  let content = document.getElementById("content")

  // Get the h2 tags - ToC entries
  let headers = content.getElementsByTagName("h2");

  if (headers.length == 0) {
    console.log("There are not any H2 elements in the document.");
  } else {
    // For each h2
    for (let i = 0; i < headers.length; i++){

      // Get Heading ID
      let name = headers[i].id
    
      // list item for the entry
      let tocListItem = document.createElement("li");
      tocListItem.classList.add("text-teci-blue-light", "hover:text-teci-blue-dark", "text-sm", "truncate"); 

      // link for the h2
      let tocEntry = document.createElement("a");
      tocEntry.setAttribute("href","#"+name);
      tocEntry.innerText=headers[i].innerText;

      // add link to list item list
      tocListItem.appendChild(tocEntry);

      // add list item to list
      tocList.appendChild(tocListItem);
    }
    
    // add list to toc element
    toc.appendChild(tocList);

    //Add a footer
    //var tocFooter = document.createElement("a");
    //tocFooter.classList.add("mt-2", "inline-block", "w-auto", "text-center", "bg-gray-50", "hover:bg-gray-100", "py-1", "px-2", "border")
    //tocFooter.innerHTML="<span class='material-icons-outlined text-sm font-bold text-gray-500 align-text-bottom'>vertical_align_bottom</span>";
    //tocFooter.setAttribute("href","#bottom");
    //tocFooter.setAttribute("title","To Bottom of Page");
    //toc.appendChild(tocFooter);

    return true;
  }
}