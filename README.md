# line-chart-POC
POC de um gráfico para renderizar informações consumidas de um arquivo no formato JSON utilizando o react-google-charts, com select's aninhados com dependência entre si.

- Linguagem: Typescript
- Front-End: React (com vite como build tool)
- Biblioteca (gráficos): React-google-charts (LineCharts - para a renderização do gráfico de linha- Dados: um arquivo de mock (data.ts) com dados no formato JSON para alimentar o gráfico- Recursos React: useState (para gerenciar os estados dos 3 selects), useEffect (para criar a dependência aninhada entre eles), useMemo (para otimizar o desempenho, evitando renderizações desnecessárias).
