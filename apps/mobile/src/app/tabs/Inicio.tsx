import ProdutoItem from '@/componets/produto/ProdutoItem'
import useProdutos from '@/data/hooks/useProdutos'
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'


export default function Inicio({ navigation }: any) {
    const { produtos } = useProdutos()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingVertical: 20, width: '100%' }}>
                {produtos.map((produto) => (
                    <ProdutoItem
                        key={produto.id}
                        produto={produto}
                        produtoSelecionado={() => {
                            navigation.navigate('ProdutoDetalhes', { produto })
                        }}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E001D',
        width: '100%',
    },
})
