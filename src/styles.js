import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    

    // general 
    newsItem:{    	
        padding: 5,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowOffset: {  width: 0,  height: 2,  },
        shadowColor: 'lightgrey',
        shadowOpacity: 1.0
    },

    image:{
        height: 100,
        borderRadius: 10,
        margin: 5,
        padding: 5
    },

    imageDetail:{ 
        height: 300,
        borderRadius: 10,
        margin: 5,
        padding: 5
    },

    imageCar:{
        height: 80,
        borderRadius: 10,
        margin: 5,
        padding: 5
    },

    imageVideo:{
        height: 190,
        position: 'absolute',
        width: '100%',
        borderRadius: 10,
        opacity: .5,
    },

    videoContainer:{
        opacity: 1, 
        backgroundColor: 'black', 
        width: '94%', 
        marginLeft: '3%', 
        marginRight: '3%',
        shadowOffset: {  width: 0,  height: 2,  },
        shadowColor: 'lightgrey',
        shadowOpacity: 1.0
    },

    videoTitle:{
        margin: 20, 
        justifyContent: 'center', 
        fontWeight: '700', 
        fontSize: 30, 
        color: 'white'
    },

    newsTitle:{
        fontSize: 15,
        fontWeight: '800',
        padding: 5
    },

    newsSource:{
        paddingLeft: 5,
        color: '#999999'
    },

    separator: {
    	borderBottomWidth: 1,
    	borderBottomColor: 'lightgrey'
    },

    textInput:{
      borderColor: 'lightgray', 
      borderWidth: 1, 
      borderRadius: 10, 
      padding: 10, 
      margin: 5,
      fontSize: 15,
      textAlign: 'center',
      height: 40, 
    }


}); 