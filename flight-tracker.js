

function flightTracker() {
    let option = {
        method: "Get"
    }
    let id = document.getElementById("id").value
    if(value==null||value?.trim() === ""){
        return;
    }
    let loading=document.getElementById("container");
    loading.innerHTML="<h1 id='loading'>Loading....</h1>";
    const key = "732c35be8733196cf6dce5936efecd4e";
    let response = fetch(`https://api.aviationstack.com/v1/flights?access_key=${key}&flight_iata=${id}`, option);
    console.log(response);
    response.then(res => res.json())
        .then(data => {
            console.log(data);
                loading.innerHTML="";
            let parent = document.getElementsByTagName("div")[0]
            for (let i = 0; i < data.data.length; i++) {

                const flight = data.data[i]; // first result
                let airline = flight.airline.name
                if(flight!=null&&airline!=null){
                    let div = document.createElement("div");
                div.setAttribute("class", "flight");
                parent.append(div);
                let filght_id = document.createElement("p");
                filght_id.setAttribute("class", "productName");
                filght_id.innerText = "Airline Name: " + airline + "\n\nFlight No: " + flight.flight.iata + "\n\nDeparture: " + flight.departure.airport + "\n\nArrival: " + flight.arrival.airport + "\n\nFlight date: " + flight.flight_date;
                div.append(filght_id);
                let status = document.createElement("button");
                status.setAttribute("class", "status");
                status.innerText = flight.flight_status;
                div.append(status);
                }
            }
            if(data.data.length==0){
                    loading.innerHTML="<h1 id='loading'>Flight not found....</h1>"
                }

        })
        .catch(err => loading.innerHTML="<h1 id='loading'>Flight not found....</h1>"+err);
}

function allflightTracker() {
    const key = "732c35be8733196cf6dce5936efecd4e";
    let option = {
        method: "Get"
    }
    let id = document.getElementById("id").value
    let loading=document.getElementById("container");
    loading.innerHTML="<h1 id='loading'>Loading....</h1>";

    let response = fetch(`https://api.aviationstack.com/v1/flights?access_key=${key}`, option);
    console.log(response);
    response.then(res => res.json())
        .then(data => {
            console.log(data);
            loading.innerHTML="";

            let parent = document.getElementsByTagName("div")[0]
            for (let i = 1; i < data.data.length; i++) {
                const flight = data.data[i]; // first result
                let airline = flight.airline.name
                if(airline!=null && flight.flight.iata !=null){
                    let div = document.createElement("div");
                    div.setAttribute("class", "flight");
                    parent.append(div);
                    let flight_id = document.createElement("p");
                    flight_id.setAttribute("class", "productName");
                    flight_id.innerText = "Airline Name: " + airline + "\n\nFlight No: " + flight.flight.iata + "\n\nDeparture: " + flight.departure.airport + "\n\nArrival: " + flight.arrival.airport + "\n\nFlight date: " + flight.flight_date;
                    div.append(flight_id);
                    let status = document.createElement("button");
                    status.setAttribute("class", "status");
                    status.innerText = flight.flight_status;
                    div.append(status);
                }
            }
            if(data.data.length==0){
                    loading.innerHTML="<h1 id='loading'>Flight not found....</h1>"
                }

        })
        .catch(err => loading.innerHTML="<h1 id='loading'>Flight not found....</h1>");
}
