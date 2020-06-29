import React, { useEffect } from 'react';
//import List from './components/List.js';
import Heading from './components/Heading.js';
import ListItem from './components/ListItem.js';
import NavBar from './components/NavBar.js';
import './App.css';

const catURL = "https://aws.random.cat/meow ";
const dogURL = "https://random.dog/woof.json";




function App() {
  const [imgData, setImgData] = React.useState([]);
  const [listItems, setListItems] = React.useState([]);
  const [update, setUpdate] = React.useState(0);

  

  const fetchCatData = async () => {
    let response = await fetch (catURL);
    console.log("update", update);

   //todo: waiting symbol while loading

    let jsonCats = await response.json();
   console.log(JSON.stringify(jsonCats));

    setImgData([jsonCats.file]);
  };

  useEffect( () => {
    fetchCatData();
  }, []);

  const fetchDogData = async () => {
    let response = await fetch (dogURL);
    console.log("update", update);

   //todo: waiting symbol while loading

    let jsonDogs = await response.json();
    console.log(JSON.stringify(jsonDogs));

    setImgData([jsonDogs.url]);
  }

  useEffect( () => { 
    fetchDogData();
  }, []);

  const ImgElement = imgData.map(function(item){
    if(item.toString().endsWith(".mp4") || item.toString().endsWith(".webm")){
    return(
      <video controls
        src = {item} 
        type="video/mp4"
        className = "Pet-Image"
      >Sorry, can´t show video</video> 
    );
     }else{
       return(
        <img
        src={item}
        alt="This is a pet."
        className="Pet-Image"
      />   
       )}
  })

  function handleClick(){
    setUpdate(update => update + 1);
    if (update % 2 === 0){
      fetchCatData();
    }else{
      fetchDogData();
    }
  }

  function AddImageToFavourites(){
  const ImgList = setListItems([...listItems, ImgElement])
  }

  function DeleteImageFromFavourites (indexToRemove){
    const deleteImage = setListItems(listItems.filter((listItem, index) => indexToRemove !== index)); 
  }
 
  return (
    <div className="App">
      
      <div className="Image-Div">
      <Heading heading = "Favourite Pet-App"/>
        <div>{ImgElement}</div>

        <NavBar 
        onClickEvent= {handleClick}
        onSaveEvent= {AddImageToFavourites}
        />
      </div>
    <div className = "List">
          <Heading heading = "List of Favourites"/>
        <ul>
            {listItems.map((listItem, index) => (
              <ListItem 
              item = {listItem}
              onClickEvent={() => DeleteImageFromFavourites(index)}
              />
            ))}
        </ul>
      </div>

       {/*   
      <List 
        onClickEvent = {() => DeleteImageFromFavourites(index)}
        items = {listItems}
        index = {index}
        key = {listItems}
        heading = "List of Favourites"
        className = "List"
      />*/}
      
    </div>
    )
};

export default App;
