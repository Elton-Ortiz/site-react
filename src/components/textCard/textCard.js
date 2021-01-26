import './textCard.css';

function TextCard() {
    return (
        
        <section className="cards">
            <div className="cards-scroll">
           <div className="card">
           <h3>Declarativo</h3>
           <p>React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.</p>
           
           <p>
Views declarativas fazem com que seu código seja mais previsível e simples de depurar.
</p>
           </div>
           <div className="card">
           <h3>Baseado em componentes</h3>
           <p>Crie componentes encapsulados que gerenciam seu próprio estado e então, combine-os para criar UIs complexas.
           </p>
           <p>
Como a lógica do componente é escrita em JavaScript e não em templates, você pode facilmente passar diversos tipos de dados ao longo da sua aplicação e ainda manter o estado fora do DOM.
</p>
           </div>
           <div className="card">
           <h3>Aprenda uma vez, use em qualquer lugar</h3>
           <p>Não fazemos suposições sobre as outras tecnologias da sua stack, assim você pode desenvolver novos recursos com React sem reescrever o código existente.
           </p>
           <p>
O React também pode ser renderizado no servidor, usando Node, e ser usado para criar aplicações mobile, através do React Native.
</p>
           </div>
           </div>
        </section>
    )
}

export default TextCard;