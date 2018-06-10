import React from 'react';
export default class Configurator extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      scene: props.scene
    }
  }

  setMaterial(index){

    this.state.scene.updateMaterial(index);
    //console.log(e);
  }

  materialList(materials) {
    const materialButtonStyle = {
      padding: '2px 5px',
      fontSize: '14px',
      fontWeight: 'bold',
    }

    const materialItems = materials.map((m,i) => {
      return <span key={i} style={materialButtonStyle} onClick={this.setMaterial.bind(this, i)}><img src={m.getPreviewSrc()} width="50" heght="50" /></span>
    });
    return materialItems
  }

  render(){
    const configuratorStyle = {
      position: 'absolute',
      top: '0px',
      width: '100%',
      height: '100%'
    }

    const headingStyle = {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '15px'
    }

    const materialSelectorStyle = {
      position: 'absolute',
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      bottom: '0',
      marginBottom: '50px'
    }

    const selectorStyle = {
      background: 'white',
      padding: '10px 25px'
    }

    console.log(this.state.scene.getMaterials());
    return(<div style={configuratorStyle}>
      <div style={headingStyle}>
      <div>
        <img src="images/acme.png" width="200"/></div>
      </div>
      <div style={materialSelectorStyle} > 
        <div style={selectorStyle}>
          {this.materialList(this.state.scene.getMaterials())}
        </div>
      </div>
    </div>);
  }
}