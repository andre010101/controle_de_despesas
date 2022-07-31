import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Resume from "./components/Header/Resume";
import GlobalStyle from './styles/global';

const App = () => {

    const data = localStorage.getItem("transactions");//pega do local storage os items transactions
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : [] //verifica se existe algum item no local storage e trata ele em json, caso não ele retorna uma lista vazia 
    );
    const [income, setIncome] = useState(0);//entradas
    const [expense, setExpense] = useState(0);//saídas
    const [total, setTotal] = useState(0);//Total

    //quando mudar a lista de transação ele efetua os calculos novamente
    useEffect(() => {
        const amountExpense = transactionsList
            .filter((item) => item.expense)//filtra os items que tem um expense true saidas
            .map((transaction) => Number(transaction.amount));//mapeia os items que são do amount saida.

        //
        const amountIncome = transactionsList
            .filter((item) => !item.expense)//filtra os itmes que são entradas
            .map((transaction) => Number(transaction.amount));//mapeia os items que são do amount entrada.

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);//pega a soma de todas as saidas
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);//pega a soma de todas as entradas.

        const total = Math.abs(income - expense).toFixed(2);//entradas menos saidas

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(expense) < Number(income) ? "-" : ""}R$ ${total}`);//se as entradas forem menor que a saida adciona um sinal de menos
    }, [transactionsList]);

    const handleAdd = (transaction) => { 
     const newArrayTransactions = [...transactionsList,transaction];//adiconada uma nova transação

     setTransactionsList(newArrayTransactions);

     localStorage.setItem("transactions",JSON.stringify(newArrayTransactions));
};

    return (
        <>
            <Header />
            <Resume income={income} expense={expense} total={total} />
            <Form handleAdd={handleAdd} />
            <GlobalStyle />
        </>
    );
};
export default App;