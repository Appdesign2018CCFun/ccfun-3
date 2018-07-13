//import dplayer from 'dplayer';
let danmaku = null;
let ftsz = '20px';
let cl = '#ffffff';
// https://www.npmjs.com/package/danmaku


Template.dplayer.onCreated(function() {

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

Template.dplayer.helpers({
  comments(){
    let cs = Comments.find().fetch()
    console.log("in comments helper")
    console.dir(cs)
    if (danmaku){
      let n = danmaku.comments.length

      for(let i = n; i<cs.length; i++){
        console.log("emitting remote comment "+i)
        console.dir(cs[i])
        danmaku.emit(cs[i])
      }
    }
    return cs
  }
})

Template.dplayer.events({

  "click #js-small"(event,instance){
    ftsz = '10px';
  },
  "click #js-medium"(event,instance){
    ftsz = '20px';
  },
  "click #js-large"(event,instance){
    ftsz = '30px';
  },
  "click #js-white"(event,instance){
    cl = '#ffffff';
  },
  "click #js-red"(event,instance){
    cl ='#f44242';
  },
  "click #js-yellow"(event,instance){
    cl ='#f9f50c';
  },
  "click #js-black"(event,instance){
    cl ='#000000';
  },
  "click #js-orange"(event,instance){
    cl ='#ff7700';
  },
  "click #js-blue"(event,instance){
    cl ='#008cff';
  },
  "click #js-green"(event,instance){
    cl ='#4cff00';
  },
  "click #js-purple"(event,instance){
    cl ='#ff00ff';
  },
  "keypress #js-comment"(event, instance){
    console.dir(event)
    if (event.charCode==13) {
        if (!danmaku) {
          danmaku = new Danmaku()
          let cs = Comments.find().fetch()
          danmaku.init({
            video: document.getElementById('my-video'),
            comments: cs
          })
        }
        console.dir(danmaku)


        let text = instance.$("#js-comment").val()
        console.log(`text is ${text}`)
        let m = document.getElementById('my-video')

        var comment = {
          text: text,
          style: {
            fontSize: ftsz,
            color: cl
          },

        };
        console.dir(comment)
        danmaku.emit(comment)
        comment.time = m.currentTime+1
        Comments.insert(comment)
        //let cs = Comments.find().fetch()
        //danmaku.comments = cs
        //console.dir(cs)
        //console.log('danmaku.comments is ')
        //console.dir(danmaku.comments)


        //console.log("comment after dm is")
        //console.dir(comment)
        instance.$("#js-comment").val("")
        console.log(`just emitted the comment: ${JSON.stringify(comment)}`)

    }
  },

})
