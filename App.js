import React, { Component } from 'react';
import { Platform,StyleSheet,Text,View, Button ,TextInput} from 'react-native';
import {Container, Header ,Title, Body} from 'native-base';


class App extends Component {
  constructor(){
    super();
    this.state={x:'', y:'', sum:0}
  }
  
  totalSum =() =>{
    const{x,y}= this.state;

    this.setState({
      sum: Number(x)/Math.pow(Number(y/100),2),
    massa : this.x,
    tinggi : this.y
  })
  }
  render() 
  { 
    var beratbadan;
    switch(true){
      case(this.state.sum<18.5):
          beratbadan = 'Berat badan anda kurang';
          break;
      case(this.state.sum>=18.5 && this.state.sum<=24.9):
          beratbadan = 'Berat badan ideal';
          break;
      case(this.state.sum>=25.0 && this.state.sum<=29.9):
          beratbadan = 'Berat badan berlebih';
          break;
      case(this.state.sum>=30.0 && this.state.sum<=39.9):
          beratbadan = 'Berat badan sangat berlebih'
          break;
      case(this.state.sum>=39.9):
          beratbadan = 'Obesitas'
          break;}
    return (

<View style={{padding: 10, backgroundColor:'lightblue'}}>
<TextInput style={{height: 40}} placeholder='Massa (Kg)'
onChangeText={(x) => this.setState({x})}/>
<TextInput style={{height: 40}} placeholder='Tinggi (Cm)'
onChangeText={(y) => this.setState({y})}/>


<Button onPress={this.totalSum}
      title="Hitung IMT"
      color="purple"/>
<Text>{`${this.state.sum}`}</Text>
<Text style ={{fontSize:30}}>Hasil : {beratbadan}</Text>
</View> 

    );
  }
}

export default App;