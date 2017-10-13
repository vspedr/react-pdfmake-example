// PdfMakePrototype.js
// https://github.com/bpampuch/pdfmake/issues/939#issuecomment-318846576

import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts'

export default () => {

	const {vfs} = vfsFonts.pdfMake;
	pdfMake.vfs = vfs;
	
	pdfMake.createPdf({content: 'Hi. I am a PDF.'}).open();
}