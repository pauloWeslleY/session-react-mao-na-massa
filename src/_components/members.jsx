import { Component } from "react";

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
    };

    this.handlerCadastrar = this.handlerCadastrar.bind(this);
    this.handlerChangeInput = this.handlerChangeInput.bind(this);
  }

  handlerCadastrar(e) {
    e.preventDefault();
    alert("Cadastrado com sucesso!");
  }

  handlerChangeInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="members">
        <div>
          <h2>Novo Usuário</h2>
          <span>{JSON.stringify(this.state, null, 2)}</span>
        </div>

        <form noValidate onSubmit={this.handlerCadastrar}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            value={this.state.nome}
            onChange={this.handlerChangeInput}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handlerChangeInput}
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            value={this.state.senha}
            onChange={this.handlerChangeInput}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default Members;
