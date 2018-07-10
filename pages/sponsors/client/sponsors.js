const ourSponsors = [
 {name:"Google",amt:"$50 million",date:"1/2/2018"},
 {name:"Apple",amt:"$20 million",date:"3.2.2018"},
 {name:"Facebook",amt:"$40 million",date:"12.4.2018"},
 {name:"Apple",amt:"$1000 million",date:"4.6.2018"}
]

const moreJSON = [
  2018,
  3.14,
  "hello world",
  true,
  false,
  null,
  undefined,
  ["asdf","asdfasd","asdf"]
]

const obj = {first:"Tim", middle:"John",last:"Hickey"}

Template.sponsors.helpers({
	sponsorData: ourSponsors,
  randomStuff: moreJSON
})
