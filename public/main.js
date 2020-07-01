var msg={
  date: '',
  subject: '',
  from: ''
}  


function getDate(value){
if(name==="date"){
   return value
}
}

function getSubject(value){
  if(name==="Subject"){
    console.log(value)
    return value
  }
}

function getFrom(value){
  if(this.name==="From"){
    return value
  }
}

$.getJSON("/messages", function (data) {
  console.log(data)
    // console.log(data[0].data)
    data.forEach((message)=>{
      console.log(message.data)
      let header=message.data.payload.headers
      header.forEach((prop)=>{
        console.log(prop)
        if(prop.name=="Subject"){
          msg.subject=prop.value
        }
        if(prop.name=="From"){
          msg.from=prop.value
        }
        if(prop.name=="Date"){
          msg.date=prop.value
        }
      })
      console.log(msg)
      $(".messages").append(`
      <button type="button" class="btn btn-primary" title='${message.data.snippet}'>
      <div class="container">
      <div class="row"><div class="col-6">${msg.date}</div><div class="col-4 offset-2">From: ${msg.from}</div></div>
      <div class="row"></div>
      <div class="row"><div class="col-10 offset-1"><h4>${msg.subject}</h4></div></div>
      </div>
      </button>
      <br><br>`)
    })
  });
  