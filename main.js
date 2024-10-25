import { arquivoSelecionado, encontrarArquivo } from './firmware.js';

async function caminhoFirmware() {
	try {
		const pasta = 'C:/Users/itinerario/Desktop/GitHub/encontrarArquivo';
		const extensao = '.css';

		const arquivoSelecionado = await encontrarArquivo(pasta, extensao);
		console.log('Arquivo selecionado:', arquivoSelecionado);
		console.log('Caminho do firmware:', pasta + arquivoSelecionado);
		const finalFirmwarePath = pasta + arquivoSelecionado;
		return finalFirmwarePath;
		// Faça algo com o arquivo selecionado...
	} catch (error) {
		console.error('Erro ao encontrar arquivo:', error);
	}
}

const finalFirmwarePath = await caminhoFirmware();
console.log('Final Firmware Path:', finalFirmwarePath);
