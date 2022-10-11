import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      textAlign:'center',
      justifyContent:'center',
      padding:10

    },
    header:{
      width:"100%",
      textAlign:"center",
      color:"#FFF",
      fontWeight:'bold',
      fontSize:"20px",
      backgroundColor:"#4760b3",
      padding:50,

    },
    input:{
      width:'70%',
      padding:'20px',
      border:'1px solid #f5f5f5f',
      backgroundColor:'#FFF',
      marginTop:'10px',
      fontSize:'20px'

    },
    taskInputContainer:{
       display:'flex',
       flexDirection:'row',
       justifyContent:'center'
    },
    btn:{
      backgroundColor:"#0077ff",
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      marginTop:'10px',
      color:'#fff',
      fontWeight:'bold'

    },
      TaskCotainer:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      backgroundColor:'#FFF',
      padding:'10px',
      margin:'10px'
    }

    
  });

  export {styles};