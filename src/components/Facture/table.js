import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 

const BasicTable = ({rows}) => {
    return ( 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right">lignePosteNumero</TableCell>
              <TableCell align="right">ignePosteReference</TableCell>
              <TableCell align="right">ignePosteDenomination</TableCell>
              <TableCell align="right">lignePosteQuantite</TableCell>
              <TableCell align="right">lignePosteUnite</TableCell>
              <TableCell align="right">rignePosteMontantUnitaireHT</TableCell>
              <TableCell align="right">lignePosteMontantRemiseHT</TableCell>
              <TableCell align="right">lignePosteTauxTva</TableCell>
              <TableCell align="right">lignePosteTauxTvaManuel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.lignePosteNumero}</TableCell>
              <TableCell align="right">{row.lignePosteReference}</TableCell>
              <TableCell align="right">{row.lignePosteDenomination}</TableCell>
              <TableCell align="right">{row.lignePosteQuantite}</TableCell>
              <TableCell align="right">{row.lignePosteUnite}</TableCell>
              <TableCell align="right">{row.lignePosteMontantUnitaireHT}</TableCell>
              <TableCell align="right">{row.lignePosteMontantRemiseHT}</TableCell>
              <TableCell align="right">{row.lignePosteTauxTva}</TableCell>
              <TableCell align="right">{row.lignePosteTauxTvaManuel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     );
}
 
export default BasicTable