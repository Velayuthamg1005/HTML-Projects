document.getElementById("form").addEventListener("submit",function(event){
    let errors=[];

    //Personal Details
    if(document.getElementById("fullName").value.trim()===""){
        errors.push("Name is required");
    }
    if(document.getElementById("initial").value.trim()===""){
        errors.push("Initial is required");
    }
    if(document.getElementById("dob").value.trim()===""){
        errors.push("Date of Birth is required");
    }
    if(![...document.getElementsByName("gender")].some(r=>r.checked)){
        errors.push("Gender is required");
    }
    if(document.getElementById("nationality").value.trim()===""){
        errors.push("Nationality is required");
    }
    if(document.getElementById("marital-status").value.trim()===""){
        errors.push("Marital Status is required");
    }

    //Contact Details

    let phone=document.getElementById("ph-num").value;
    if(phone==="" || !/^\d{10}$/.test(phone)){
        errors.push("Phone number must be exactly 10 digits");
    }

    let email=document.getElementById("email").value;
    if(email===""){
        errors.push("Email is required");
    }
    else if(!/^\S+@\S+\.\S+/.test(email)){
        errors.push("Email pattern does not match");
    }

    if(document.getElementById("resi-add").value.trim()===""){
        errors.push("Residential address is required");
    }

    if(document.getElementById("perm-add").value.trim()===""){
        errors.push("Permanent address is required");
    }

    let pincode=document.getElementById("pin-code").value;
    if(pincode===""  || !/^\d{6}$/.test(pincode)){
        errors.push("Pincode is required");
    }

    // Family Details

    if(document.getElementById("father-name").value.trim()===""){
        errors.push("Father Name is required");
    }

    if(document.getElementById("mother-name").value.trim()===""){
        errors.push("Mother Name is required");
    }

    if(document.getElementById("emer-person").value.trim()===""){
        errors.push("Emergency person is required");
    }

    if(document.getElementById("emer-contact").value.trim()===""){
        errors.push("Emergency Contact is required");
    }

    // Educational Details

    let sslcMark=document.getElementById("sslc-mark").value;
    if(sslcMark=== "" || !/^\d{3}$/.test(sslcMark)){
        errors.push("SSLC Mark of 3 digits");
    }

    let sslcPassed=document.getElementById("sslc-passedout").value;
    if(sslcPassed=== "" || !/^\d{4}$/.test(sslcPassed)){
        errors.push("PassedOut of 4 digits 'Years' ");
    }

    let hscMark=document.getElementById("hsc-mark").value;
    if(hscMark=== "" || !/^\d{3}$/.test(hscMark)){
        errors.push("HSC Mark of 3 digits");
    }

    let hscPassed=document.getElementById("hsc-passedout").value;
    if(hscPassed=== "" || !/^\d{4}$/.test(hscPassed)){
        errors.push("PassedOut of 4 digits 'Years' ");
    }

    let ugMark=document.getElementById("ug-mark").value;
    if(ugMark=== "" || !/^\d{2}$/.test(ugMark)){
        errors.push("UG Percentage of 2 digits");
    }

    let ugPassed=document.getElementById("ug-passout").value;
    if(ugPassed=== "" || !/^\d{4}$/.test(ugPassed)){
        errors.push("PassedOut of 4 digits 'Years' ");
    }

    
    let pgMark=document.getElementById("pg-mark").value;
    if(pgMark=== "" || !/^\d{2}$/.test(pgMark)){
        errors.push("PG Percentage of 2 digits");
    }

    let pgPassed=document.getElementById("pg-passout").value;
    if(pgPassed=== "" || !/^\d{4}$/.test(pgPassed)){
        errors.push("PassedOut of 4 digits 'Years' ");
    }

    if(!document.getElementById("resume").files.length){
        errors.push("Please upload ur resume");
    }

    // Government Identity Details

    let aadhar=document.getElementById("aadhar").value;
    if(aadhar==="" || !/^\d{12}$/.test(aadhar)){
        errors.push("Aadhar Number should be of 12 digits");
    }

    let pancard=document.getElementById("pancard").value;
    if(pancard==="" || !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pancard.toUpperCase())){
        errors.push("Pan Number should be of 10 digits");
    }

    if(errors.length>0){
        event.preventDefault();
        alert(errors.join("\n"));
    }

});