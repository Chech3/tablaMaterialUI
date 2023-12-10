import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



const data = [
  {
    artista: "nose",
    musica: "pop",
  },
  {
    artista: "yo",
    musica: "pop",
  },
  {
    artista: "pupu",
    musica: "pop",
  },
  {
    artista: "a",
    musica: "pop",
  },
];

function tabla() {
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Artista</TableCell>
              <TableCell>Musica</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((x) => (
              <TableRow key={x.artista}>
                <TableCell>{x.artista}</TableCell>
                <TableCell>{x.musica}</TableCell>
                <TableCell >
                  <Button size="small"> <EditIcon/> </Button>
                  <Button size="small" color="error"><DeleteIcon/></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default tabla;
