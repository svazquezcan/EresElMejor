import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { db } from '../config/db.js';

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

  }

});

export class Evolucion extends React.Component {

  state = {
    retos: [],
    loading: true
  }

  constructor(props){
    super();  
  }

  componentDidMount(){
    let retos=[];
    db.collection("retos").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        retos.push({"key":doc.id, "value":doc.data()});
      });
      this.setState({retos:retos, loading:false}, () => {
      });
    });
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
    <TouchableOpacity style={styles.reto} onPress={() => this.props.navigation.navigate('DetalleReto',{'titulo':data.item.value.nombre,'img':data.item.value.detalle})}>
      <Text style={styles.nombre}>{data.item.value.nombre}</Text> 
      <Text style={styles.detalle}>{data.item.value.detalle}</Text>
    </TouchableOpacity>
    <View style={styles.fondoPorcentaje}>
      <Text style={styles.porcentaje}>{data.item.value.completado}</Text>
    </View> 
  </View>

  render(){

    if(this.state.loading){
      return(
      <View style={styles.contenedor}>
        <Text>Cargando</Text>
        <ProgressBar 
          styleAttr="Horizontal"
          indeterminate={true}
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