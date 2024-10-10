import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'

import Pagamento from './Pagamento'
import ProdutoDetalhes from './ProdutoDetalhes'
import Tabs from '../tabs'
import UltimasCompras from './UltimasCompras'
import { ProvedorProdutos } from '@/data/contexts/ContextoProdutos'
import { ProvedorCarrinho } from '@/data/contexts/ContextoCarrinho'
import { ProvedorPagamento } from '@/data/contexts/ContextoPagamento'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <ProvedorProdutos>
            <ProvedorCarrinho>
                <ProvedorPagamento>
                    <NavigationContainer theme={DarkTheme}>
                        <Stack.Navigator initialRouteName="Tabs">
                            <Stack.Screen
                                name="Tabs"
                                component={Tabs}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name="ProdutoDetalhes"
                                component={ProdutoDetalhes}
                                options={{
                                    title: 'Detalhes do Produto',
                                    headerBackTitle: 'Voltar',
                                    headerShown: true,
                                    headerStyle: { backgroundColor: '#0D001E' },
                                    headerTintColor: '#FFF',
                                }}
                            />
                            <Stack.Screen
                                name="Pagamento"
                                component={Pagamento}
                                options={{
                                    title: 'Detalhes do Pagamento',
                                    headerBackTitle: 'Voltar',
                                    headerShown: true,
                                    headerStyle: { backgroundColor: '#0D001E' },
                                    headerTintColor: '#FFF',
                                }}
                            />
                            <Stack.Screen
                                name="UltimasCompras"
                                component={UltimasCompras}
                                options={{
                                    title: 'Últimas Compras',
                                    headerBackTitle: 'Voltar',
                                    headerShown: true,
                                    headerStyle: { backgroundColor: '#0D001E' },
                                    headerTintColor: '#FFF',
                                }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </ProvedorPagamento>
            </ProvedorCarrinho>
        </ProvedorProdutos>
    )
}
