import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import axios from 'axios';




class App extends Component {
  state = {
    users: ["Gerson", "Samira"]
  }

 /* componentDidMount() {
    axios.get()
      .then(res => {
        const nicknames = res.data;
        this.setState({ nicknames });
        
      })
  }
*/
  

  render() {
    const users = "Bill Portões";
    
    console.log(users);
    return <div className="App">
        <Header />
        <section className="App-main">
          {this.state.users.map(person => <Post nickname={person}/>)}
          <Post nickname={users} avatar="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg" caption="Look the new Windows 10!!" image="https://t.tudocdn.net/319163?w=646&h=284" />
          <Post nickname="Linus Torvalds  " avatar="https://avatars0.githubusercontent.com/u/1024025?s=460&v=4" caption="Linux is free! haha" image="https://e-tinet.com/wp-content/uploads/2017/02/MELHORES-DISTRIBUICOES-LINUX-RODAR-SERVIDORES-1024x536.png" />

          {/* more posts */}
          <button>Atualizar</button>
          <button>Postar</button>
        </section>

      </div>;
  }
}

export default App;