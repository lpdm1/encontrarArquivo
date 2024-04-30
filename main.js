import { arquivoSelecionado, encontrarArquivo } from './firmware.js';

async function caminhoFirmware() {
	try {
		const pasta = '/home/lm/Documentos/teste-firmware/';
		const extensao = '.css';

		const arquivoSelecionado = await encontrarArquivo(pasta, extensao);
		console.log('Arquivo selecionado:', arquivoSelecionado);
		console.log('Caminho do firmware:', pasta + arquivoSelecionado);
		// Faça algo com o arquivo selecionado...
	} catch (error) {
		console.error('Erro ao encontrar arquivo:', error);
	}
}

caminhoFirmware();
