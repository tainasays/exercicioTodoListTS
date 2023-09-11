class Task {
    private descricao: string;
    private concluida: boolean = false;
    prioridade: string = '';


    constructor(descricao: string, concluida: boolean) {
        this.descricao = descricao;
        this.concluida = concluida;
}

marcarConcluida(){
this.concluida = true;
}

toString(){
return this.descricao + (this.concluida ? (", Concluída") : (", Pendente") )
}

}

class Lista<Task> {
    itens: Task[] = [] ;


  

adicionarTarefa(item: Task){
    this.itens.push(item);
}

listarTarefas(){
    console.log(this.itens);
    // return this.itens;

    for(let i = 0; i < 1; i++) {
        console.log(this.itens.toString());
    }

  
}

}

class ListaPrioritaria extends Lista<Task> {
    prioridade?: string;

adicionarPrioritaria(descricao: string, prioridade: string, concluida: boolean): void {
    const novaTask = new Task(descricao, concluida);
    novaTask.prioridade = prioridade;
    this.itens.push(novaTask);

}
listarTarefasPrioritarias(): void {
    console.log("Tarefas Prioritárias: ");
    this.listarTarefas();
}

}

const listaTasks =  new Lista<Task>();
listaTasks.adicionarTarefa(new Task("Finalizar os exercícios do Módulo III", true));
console.log("==== Lista de Tarefas ====");
listaTasks.listarTarefas();

const listaPrioritaria = new ListaPrioritaria();
listaPrioritaria.adicionarPrioritaria("Entregar o exercício final do Módulo III", "Prioridade alta", false);
listaPrioritaria.listarTarefasPrioritarias();