
fetch ("https://thatsthespir.it/api")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value) {
        id('quote').innerHTML=value.quote;
        let introductionGender = "";
        value.gender==="m" ? introductionGender="Mister " : introductionGender="Miss ";
        id('author').textContent=introductionGender+value.author+" - ";
        id('authorQuote').innerHTML="<a href='https://thatsthespir.it/of/"+value.slug+"' target='_blank'>"+value.total_quotes+" quotes</a>";
        id('permalink').innerHTML="<a href='"+value.permalink+"' target='_blank'>See this quote on https://thatsthespir.it</a>";
        if (value.photo==="") id('photo').src="https://via.placeholder.com/150/97A2A8/808080?text=PHOTO_UNVAILABLE";
        else id('photo').src=value.photo;
        id('photo').alt=value.author;
    })
    .catch(function(err) {
        alerte("oups, something went wrong, please try again later");
    });



