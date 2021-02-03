import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import firestore from '@react-native-firebase/firestore';
import { set } from 'react-native-reanimated';
import { DetalleReto } from './DetalleReto.js'


  const styles = StyleSheet.create({
  contenedor:{
    flex:3 ,
    backgroundColor: '#ffffff',
    alignContent:'center',
    flexDirection: 'column',

  },
  
  contenido:{
    flex:3,
    justifyContent:'center',
    alignContent:'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor:'#000000',
    backgroundColor:'#ffffff',
  },

  menuInferior:{
    flex:0.1,
    backgroundColor:'#0984e3',
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'column',
    borderColor:'#ffffff',
    borderWidth:2,
    borderRadius:20,

  },
  textoBoton:{
    color:'#ffffff',
    fontWeight:"bold",
    fontSize:18
  },

  detalle:{
    color: 'grey',
    fontSize: 14,
    flexDirection: 'column',
    flex:3,
    backgroundColor: '#ffffff',


  },

  nombre:{
    fontSize: 17,
    flexDirection: 'column',
    flex:3,
    backgroundColor: '#ffffff',
  },

  reto:{
    padding: 20,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ffffff',
  },

  completado:{
    flexDirection: 'row',
    flex:1,
    justifyContent: "center",
    backgroundColor: '#ffffff',   
  },

  porcentaje:{
    flexDirection: "column",   
    padding:10, 
    color:"#ffffff",
    fontWeight: "bold",
  },

  fondoPorcentaje:{ 
    borderWidth:2,
    borderColor:"#ffffff",
    borderRadius:20, 
    backgroundColor: '#FF69B4',
    marginTop:20,
    height:50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20
  },

  label: {
    color: '#999',
    fontSize: 14,
    fontWeight: 'bold',
    margin: 20,
    flexDirection: "column",
    justifyContent: "center"
  },

});


export class Evolucion extends React.Component {

  constructor(props){
    super(); 
    this.state = {
      isMounted: false,
      retos: [],
      loading: true,
      progress: 0.0
    }
  }
 
  componentDidMount(){
    let retos=[];
    let isMounted=false;
    firestore().collection("retos").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        retos.push({"key":doc.id, "value":doc.data()});
        this.setState({progress:this.state.progress + (1/retos.length)*100})
      });
      setTimeout(() => {
        this.setState({retos:retos, loading:false});
      }, 1500);
      this.setState({isMounted:true})
    });
  }

  /*reRender(){
  console.log("holita")
  let retosNuevos=[];
    firestore().collection("retos").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        retosNuevos.push({"key":doc.id, "value":doc.data()});
    });
    this.setState({retos:retosNuevos})
    })
  }*/

  componentDidUpdate(prevProps, prevState){
    let retosNuevos = [];
    let isMounted = this.state.isMounted;
    if (isMounted){
      firestore().collection("retos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          retosNuevos.push({"key":doc.id, "value":doc.data()});
      });
          if (prevState.retos !== retosNuevos){
            this.setState({retos:retosNuevos})
          }
          else{
          }
      });
    }
  }

  itemSeparator = () => {
    return ( 
      <View
          style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8'
          }}  
      />
    );
  };

  renderItem = data =>
  <View style={styles.completado}>
    <TouchableOpacity style={styles.reto} onPress={() => this.props.navigation.navigate('DetalleReto',{'titulo':data.item.value.nombre,'detalle':data.item.value.detalle, 'image':data.item.value.imageData})}>
      <Text style={styles.nombre}>{data.item.value.nombre}</Text> 
      <Text style={styles.detalle}>{data.item.value.detalle}</Text>
    </TouchableOpacity>
    <View style={styles.fondoPorcentaje}>
      <Text style={styles.porcentaje}>{data.item.value.completado}</Text>
    </View> 
  </View>

  render(){
    const { progress } = this.state.progress;

    if(this.state.loading){
      return(
      <View style={styles.contenedor}>
        <Text style={styles.label}>Cargando retos</Text>
          <ProgressBar
            marginLeft={20}
            marginRight={20}
            progress={this.state.progress}
            width={null}
            borderColor="#DDD"
            fillColor="lightblue"
            barColor="blue"
            borderRadius={5}
            useNativeDriver={true}
            
          />
      </View>
      )
    }

    else{
      return(
      <View style={styles.contenedor}>
        <FlatList 
        style={styles.contenedor}
        data={this.state.retos}
        ItemSeparatorComponent={this.itemSeparator}
        renderItem={item => this.renderItem(item)}
        keyExtractor={(item, index) => item.key}
        />  
        <TouchableOpacity style={styles.menuInferior} onPress={() => this.props.navigation.navigate('NuevoReto')}>
        <Text style={styles.textoBoton}>NUEVO RETO</Text>
      </TouchableOpacity>  
      </View>
      )
    } 
  }
}