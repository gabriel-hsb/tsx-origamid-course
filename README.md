# Exercise

Interface da API: https://data.origamid.dev/vendas/

<!-- Essa API possui dados de hoje até 90 dias atrás -->

- [x] 1. Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
- [x] 2. Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date)
- [x] 3. Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores
- [x] 4. Crie 3 estados reativos em App.tsx: data, inicio, final
- [x] 5. Utilize o componente Input.tsx para modificar o estado de inicio/final
- [x] 6. Crie um efeito que ocorrerá toda vez que inicio/final mudar. Se existir inicio/final, faça o fetch da API e
     popule o estado de data com o resultado.
- [x] 7. Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado
