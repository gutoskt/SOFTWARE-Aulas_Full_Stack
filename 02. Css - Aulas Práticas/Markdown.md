# RESOLUÇÃO DO TESTE - MLFQ

## Questão - 1:

O que acontece é que, quando um processo entra na fila de baixa prioridade, ele só é executado depois que todos os processos da fila de alta prioridade são finalizados, o que o deixa efetivamente "esquecido" e constantemente adiado. Isso provavelmente ocorre porque não há um mecanismo para "boost" a sua prioridade ao longo do tempo, uma função que seria necessária para que houvesse justiça no sistema e para garantir que todos os processos, em algum momento, tivessem a chance de serem executados.

## Questão - 2:

Isso pode acontecer em duas situações: ou quando os processos não têm chance de realizar operações de entrada e saída, ou quando, ao contrário, todos eles têm uma frequência tão alta dessas operações que acabam permanecendo juntos na fila de alta prioridade.

## Questão - 3:

Eu defini o tempo de Boost como 19 timeslices, embora o objetivo fosse garantir uma execução a cada 20. A escolha de 19 foi uma margem de segurança para assegurar que o processo 'A', que é totalmente CPU-Bound, executasse em um intervalo que nunca ultrapassasse os 20 timeslices.

Um comportamento interessante que observei é que, no intervalo entre os Boosts, se todos os processos de alta prioridade bloquearem para E/S, o escalonador executa o processo 'A' de baixa prioridade. Isso dá uma chance extra de execução para ele.

Com essa configuração, confirmei que a estratégia funcionou bem e o processo 'A' de fato não sofreu starvation.

## Questão - 4:

A melhor performance foi obtida com 3 filas de prioridade e a configuração de quanta [5, 3, 1], que resultou no menor Tempo Médio de Retorno de 124.50.

### Resultados dos Testes de Configuração

| Nº de Filas de Prioridade | Configuração dos Quanta (do maior para o menor prio) | Tempo Médio de Retorno (TR) |
| :--- | :--- | :--- |
| 3 | `[8, 5, 3]` | 139.75 |
| **3** | **`[5, 3, 1]`** | **124.50** |
| 4 | `[8, 5, 3, 1]` | 180.00 |
| 4 | `[10, 6, 4, 2]` | 175.67 |
| 5 | `[10, 7, 5, 3, 1]`| 175.33 |
| 5 | `[8, 6, 4, 2, 1]` | 143.25 |

---
