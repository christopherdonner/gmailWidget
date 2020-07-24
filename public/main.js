
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

var msg={}  

$.getJSON("/messages", function (data) {
  console.log(data)
    // console.log(data[0].data)
    data.forEach((message)=>{
      let header=message.data.payload.headers
      header.forEach((prop)=>{
        // console.log(prop)
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

      $(".messages").append(`
        <Button type="button" class="btn btn-primary" title='${message.data.snippet}'>
        <div class="container">
        <div class="row"><div class="col-4">${msg.date}</div><div class="col-4 offset-2">From: ${msg.from}</div><div class="col-2"><div type="button" class="btn btn-warning" title="Delete">X</div></div></div>
        <div class="row"></div>
        <div class="row"><div class="col-10"><h5>${msg.subject}</h5></div><div class="col-2"><div type="button" class="btn btn-success" title="Import">+</div></div></div>
        </div>
        </Button>
        <br><br>`)
    })
  });
  