document.getElementById('loginform').addEventListener('submit',async function(e){
    e.preventDefault();
    const jobtitle = document.getElementById("jobtitle").value;
    const location = document.getElementById("location").value;
    const experience = document.getElementById("Experience").value;

    const response = await fetch('http://localhost:3000/searchjobs',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({jobtitle,location,experience})
    });
    const res = await response.json();
    alert(res.message);
});

