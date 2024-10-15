export function addTokenToHeader({headers}){
    const token = localStorage.getItem("token");
    if (token){
        headers.Authorization = `${token}`;

    }
    return headers;

}

export function handleApiResponse(res) {
  
    const status = res.response ? res.response.status : res.status;
    switch (status) {
        case 401:
            localStorage.removeItem("token");
            alert("You're logged out");
            window.location.href = "/login";
            return null;
        case 400:
            alert("User already exists");
            return null;
        case 201:
            alert("Registered successfully");
            console.log(res.data);
            return res.data;
        case 200:
            return res.data;
        case 500:
            alert("Something went wrong");
            return null;
        default:
            alert("Unexpected response status: " + status);
            return null;
       
    }
}