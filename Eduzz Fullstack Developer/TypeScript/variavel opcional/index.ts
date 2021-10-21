interface IUsuario {
  id: string;
  email: string;
  cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario: IUsuario){
  if(usuario.cargo) {
    //função para redirecionar(usuario.cargo)
  }else{
    //redirecionar para a área do usuário
  }
}