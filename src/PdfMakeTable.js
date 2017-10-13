import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts';
import fakeData from './FakeData';

const _format = (data) => {
	return data.map(item => {
		return ([
			{text: item.name},
			{text: item.username},
			{text: item.email},
			{text: item.phone},
			{text: item.website},
		]);
	});
}

export default (rows) => {
	const {vfs} = vfsFonts.pdfMake;
	pdfMake.vfs = vfs;

	const data = fakeData(rows);
	const formattedData = _format(data);
	
  const documentDefinition = {
		pageSize: 'A4',
		pageOrientation: 'landscape',
		content: [
			{text: 'Header', style: 'subheader'},
			'Some text here',
			{text: ['More text here'], color: 'gray', italics: true},
			{
				style: 'tableExample',
				table: {
					headerRows: 1,
					dontBreakRows: true,
					// keepWithHeaderRows: 1,
					body: [
						[{text: 'Name', style: 'tableHeader'}, {text: 'Username', style: 'tableHeader'}, {text: 'Email', style: 'tableHeader'}, {text: 'Phone', style: 'tableHeader'}, {text: 'Website', style: 'tableHeader'}],
						...formattedData,
					]
				}
			}
		]
  };
	
	pdfMake.createPdf(documentDefinition).open();
}