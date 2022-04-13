<script>
    import { createEventDispatcher } from 'svelte';
    import Modal from "$lib/components/Modal.svelte";

    export let resellerModal = true;
    export let selection = 'sel';
    export let allowContinue = false;

    let modal;
    let resellerIndex = -1;
    let resellerArray = [
        ["BE", "NL", "LU"],
        ["CN","HK"],
        ["CZ","SK"],
        ["EG","JO","LB","OM","QA","SA","AE"],
        ["FR"],
        ["DE","CH","AT","LI"],
        ["IN","BD","LK","CM","BT","MM"],
        ["IT","HU"],
        ["JP"],
        ["KR"],
        ["PL"],
        ["RU","AM","AZ","BY","GE","KZ","KG","MD","TJ","TM","UA","UZ"],
        ["RO"],
        ["SG","MY","ID","VN"],
        ["ES"]
    ]
    
    function isReseller() {
        resellerIndex = resellerArray.findIndex(arr => arr.includes(selection))
        return resellerIndex > -1
    };

    function handleSelection() {
      if (resellerModal){
        if (selection != "sel" && !isReseller() ) {
            allowContinue = true;
        } else if (selection != "sel" && isReseller()) {
            modal.show();
            allowContinue = false;
        } else {
            allowContinue = false;
        }
      }
    };
</script>


<select name="card_country" bind:value={selection} on:change={handleSelection}>
    <option value="sel">Select Your Country</option>
    <option value="AI">Anguilla</option>    
    <option value="AR">Argentina</option>
    <option value="AM">Armenia</option>
    <option value="AU">Australia</option>
    <option value="AT">Austria</option>
    <option value="AZ">Azerbaijan</option>
    <option value="BD">Bangladesh</option>
    <option value="BY">Belarus</option>
    <option value="BE">Belgium</option>
    <option value="BR">Brazil</option>
    <option value="CA">Canada</option>
    <option value="CL">Chile</option>
    <option value="HR">Croatia</option>
    <option value="CN">China</option>
    <option value="CR">Costa Rica</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="DK">Denmark</option>
    <option value="DO">Dominican Republic</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="EE">Estonia</option>
    <option value="FO">Faroe Islands</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="GE">Georgia</option>
    <option value="DE">Germany</option>
    <option value="GR">Greece</option>
    <option value="HK">Hong Kong</option>
    <option value="HU">Hungary</option>
    <option value="IS">Iceland</option>
    <option value="IN">India</option>
    <option value="ID">Indonesia</option>
    <option value="IE">Ireland</option>
    <option value="IL">Israel</option>
    <option value="IT">Italy</option>
    <option value="JM">Jamaica</option>
    <option value="JP">Japan</option>
    <option value="JO">Jordan</option>
    <option value="KZ">Kazakhstan</option>
    <option value="KW">Kuwait</option>
    <option value="KG">Kyrgyzstan</option>
    <option value="LV">Latvia</option>
    <option value="LB">Lebanon</option>
    <option value="LT">Lithuania</option>
    <option value="LU">Luxembourg</option>
    <option value="MY">Malaysia</option>
    <option value="MT">Malta</option>
    <option value="MX">Mexico</option>
    <option value="MD">Moldova</option>
    <option value="MM">Myanmar</option>
    <option value="CM">Nepal</option>
    <option value="NL">Netherlands</option>
    <option value="NZ">New Zealand</option>
    <option value="NO">Norway</option>
    <option value="OM">Oman</option>
    <option value="PE">Peru</option>
    <option value="PH">Philippines</option>
    <option value="PL">Poland</option>
    <option value="PT">Portugal</option>
    <option value="QA">Qatar</option>
    <option value="RO">Romania</option>
    <option value="RU">Russia</option>
    <option value="SA">Saudi Arabia</option>
    <option value="SG">Singapore</option>
    <option value="SK">Slovakia</option>
    <option value="SI">Slovenia</option>
    <option value="ZA">South Africa</option>
    <option value="KR">South Korea</option>
    <option value="ES">Spain</option>
    <option value="LK">Sri Lanka</option>
    <option value="SE">Sweden</option>
    <option value="CH">Switzerland</option>
    <option value="TW">Taiwan</option>
    <option value="TJ">Tajikistan</option>
    <option value="TH">Thailand</option>
    <option value="TR">Turkey</option>
    <option value="TM">Turkmenistan</option>
    <option value="UA">Ukraine</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VE">Venezuela</option>
    <option value="VN">Viet Nam</option>
</select>

<Modal bind:this={modal}>
    <div class="mt-3 text-center">
      <h2 class="text-lg leading-6 font-medium text-gray-900">Reseller Required</h2>
      <div class="mt-2 px-7 py-3">
        <p class="text-sm text-gray-500">
          Thunderhead cannot sell to you directly, you must use the authorized reseller for your region.
        </p>
      </div>
      <div class="items-center px-4 py-3">
        <a href="https://www.thunderheadeng.com/pyrosim/pyrosim-licensing/#r{resellerIndex+1}"
          id="ok-btn"
          class="px-4 py-2 bg-teci-blue-light text-white text-base font-medium w-full shadow-sm hover:bg-teci-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Reseller Contact Information
        </a>
      </div>
    </div>
</Modal>