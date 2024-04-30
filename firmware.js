import * as fs from 'node:fs';
import * as path from 'node:path';

export let arquivoSelecionado;

export const encontrarArquivo = (pasta, extensao) => {
	return new Promise((resolve, reject) => {
		fs.readdir(pasta, (err, files) => {
			if (err) {
				console.error('Erro ao ler o diretório:', err);
				reject(err);
				return;
			}

			const arquivosFiltrados = files.filter((file) => path.extname(file) === extensao);

			if (arquivosFiltrados.length === 0) {
				const mensagem = `Nenhum arquivo com a extensão ${extensao} foi encontrado na pasta ${pasta}`;
				console.log(mensagem);
				reject(new Error(mensagem));
				return;
			}

			const arquivoSelecionado = arquivosFiltrados[0];
			console.log('Arquivo encontrado:', arquivoSelecionado);
			resolve(arquivoSelecionado);
		});
	});
};
