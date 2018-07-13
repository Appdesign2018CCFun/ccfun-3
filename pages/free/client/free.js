//import dplayer from 'dplayer';
let danmaku = null;

// https://www.npmjs.com/package/danmaku


Template.free.onCreated(function() {

  this.state = new ReactiveDict();
  this.state.setDefault({
    color: "bg-info",
    counter: 0,
    recipes:[],
    r:{},
    zipinfo:null,

  });
  console.log("creating the template");
  console.dir(this.state);
});

Template.free.events({
  "keypress #js-comment"(event, instance){
    console.dir(event)
    if (event.charCode==13) {
        if (!danmaku) {
          danmaku = new Danmaku()
          danmaku.init({
            video: document.getElementById('my-video'),
            comments: []
          })
        }
        console.dir(danmaku)


        let text = instance.$("#js-comment").val()
        console.log(`text is ${text}`)

        var comment = {
          text: text,
          style: {
            fontSize: '20px',
            color: '#ffffff'
          },
        };
        console.dir(comment)

        danmaku.emit(comment)
        instance.$("#js-comment").val("")
        console.log(`just emitted the comment: ${JSON.stringify(comment)}`)

    }
  },

})
