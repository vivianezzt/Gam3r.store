import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native'
import CabecalhoCheckout from '@/componets/checkout/CabecalhoCheckout'
import FormularioEntrega from '@/componets/checkout/pagamento/FormularioEntrega'
import ResumoPagamento from '@/componets/checkout/pagamento/ResumoPagamento'
import SelecaoFormaPagamento from '@/componets/checkout/pagamento/SelecaoFormaPagamento'
import useCarrinho from '@/data/hooks/useCarrinho'
import usePagamento from '@/data/hooks/usePagamento'



export default function Pagamento() {
    const { parcelamento, qtdeItens, valorTotal, valorTotalCheio } = useCarrinho()
    const { entrega, formaPagamento, alterarEntrega, alterarFormaPagamento, finalizarCompra } =
        usePagamento()

    return (
        <SafeAreaView style={styles.container}>
            <CabecalhoCheckout passo="pagamento" />
            <ScrollView contentContainerStyle={styles.containerScroll}>
                <Text style={styles.titulo}>Forma de Pagamento</Text>
                <SelecaoFormaPagamento
                    formaPagamento={formaPagamento}
                    formaPagamentoMudou={alterarFormaPagamento}
                />

                <Text style={styles.titulo}>Dados da Entrega</Text>
                <FormularioEntrega entrega={entrega} entregaMudou={alterarEntrega} />
            </ScrollView>

            <ResumoPagamento
                qtdeItens={qtdeItens}
                valorTotal={valorTotal}
                valorTotalCheio={valorTotalCheio}
                parcelamento={parcelamento}
                finalizarCompra={finalizarCompra}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E001D',
    },
    containerScroll: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
})
