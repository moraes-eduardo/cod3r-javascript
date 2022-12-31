/*
Tabela verdade:
# E (se um for falso = false)
v e v -> v
v e f -> f
f e ? -> f

# OU (se um for verdadeiro = true)
v ou ? -> v
f ou v -> v
f ou f -> f

# XOR (exclusivo - dois diferentes)
v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

# ! (negação - inverte)
!v -> f
!f -> v
*/

