import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    

    // general 
    newsItem:{    	
        padding: 20,
        paddingLeft: 25,
        paddingRight: 25,
        width: 68,
        margin: 10,
        borderRadius: 70,
        backgroundColor: '#4F8EF7',
        shadowOffset: {  width: 0,  height: 2,  },
        shadowColor: '#4F8EF7',
        shadowOpacity: .4,
        right: 0, 
        bottom: '10%', 
        position: 'absolute'
    },

    image:{
        height: 100,
        borderRadius: 10,
        margin: 5,
        padding: 5
    },

    imageDetail:{ 
        height: 240,
        borderRadius: 10,
        margin: 5,
        padding: 5,
        width: 300
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
        marginBottom: 2,
        justifyContent: 'center', 
        fontWeight: '700', 
        fontSize: 30, 
        color: 'white'
    },

    videoSubTitle:{
        marginLeft: 20, 
        justifyContent: 'center', 
        fontWeight: '200', 
        fontSize: 15, 
        color: 'lightgrey'
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
    },
    signin: {
        padding: 20
    },
    deal: {
        flex: 1,
        margin: 10,
        padding: 5
    },
    bigButton:{
        backgroundColor: '#2191fb', 
        borderRadius: 10
    },
    outlineButton: {
      fontSize: 20,
      marginTop: 10,
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:5,
      borderColor:'#2191fb',
      padding: 8,
      color: '#2191fb'
    },
    infoBox:{
            textAlign: 'center', 
            flex: 1, 
            padding: 11
    },
    field: {
        width: 300,
        color: '#449aeb',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
    },
    checkoutContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkoutHeader: {
      fontSize: 18,
      textAlign: 'center',
      margin: 10,
    },

    button:{
        borderRadius: 10,
        borderColor: '#2191fb',
    }


}); 