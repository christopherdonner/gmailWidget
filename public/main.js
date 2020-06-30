var msg={}  


function getDate(name){
return name =="date"
}

$.getJSON("/messages", function (data) {
  console.log(data)
    // console.log(data[0].data)
    data.forEach((message)=>{
      console.log(message)
      let header=message.data.payload.headers
      console.log(header)
      header.forEach((prop)=>{
        console.log(prop)
        if(prop.name=='Date'){
          msg.date=prop.value
        }
        // if(prop.name=='Subject'){
        //   msg.subject=prop.subject
        // }
      })
      console.log(msg)
      $(".messages").append(`
      <button type="button" class="btn btn-primary">
      <div class="container">
      <p>${msg.date}</p>
      <h3>${msg.subject}</h3>
      </div>
      </button>
      <br>`)
    })
  });
  