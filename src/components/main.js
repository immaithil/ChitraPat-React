import React, { Component } from "react";
import ChitraPat from "./chitraPat";
import Title from "./title";
import AddPhoto from "./AddPhoto";
import {Route} from 'react-router-dom'

class Main extends Component {
  constructor() {
    super();
    this.removePhoto = this.removePhoto.bind(this);
    //this.navigate=this.navigate.bind(this);
    this.state = {
      posts: [
        {
          id: 0,
          description: "Thor",
          imageLink:
            "https://www.koimoi.com/wp-content/new-galleries/2020/04/thor-love-and-thunder-chris-hemsworth-starrer-to-bring-back-this-dead-character-its-not-loki-1.jpg",
        },
        {
          id: 1,
          description: "Doga",
          imageLink:
            "https://assets.change.org/photos/7/vl/af/adVLafEUtAyeAvX-800x450-noPad.jpg?1517532044",
        },
        {
          id: 2,
          description: "DeadPool",
          imageLink:
            "https://static0.srcdn.com/wordpress/wp-content/uploads/2019/07/Deadpool-Liefeld-Comic-Cover.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
        },
      ],
      screen: "photos", // photos, add photos
    };
  }

  removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState((state) => ({
      posts: state.posts.filter((post) => post != postRemoved),
    }));
  }

  addPhoto(postsSubmitted){
    this.setState(state=>({
      posts: state.posts.concat([postsSubmitted])
    }))
  }


//don't need navigate because of Route element
// navigate(){
//     this.setState({
//         screen: 'addPhoto'
//     })
// }

  render() {
    
    return (
      <div>
         <Route  exact path='/' render={()=>{
           return( 
            <div>
            <Title title={"ChitraPat"} />
            <ChitraPat
              posts={this.state.posts}
              onRemovePhoto={this.removePhoto}
              onNavigate={this.navigate}
            />
          </div>
           )
         }}/>
       {/* use component attubute if we only have to render only one component through Route */}
         <Route path='/AddPhoto' render={({history})=>{
           return(
             <AddPhoto onAddPhoto={(addedPost)=>{
                this.addPhoto(addedPost);
                history.push('/')
             }} />
           )
         }}/>
      </div>
    )
  }
}

// function SimulateFetchFromDatabase() {
//     return [here we can put any data which we want to transfer to posts]
// }

export default Main;
