import { component$ } from '@builder.io/qwik';

interface TableProps {
  header?: string;
  rows?: string;
}



export const Table = component$((props: TableProps) => {

  const headers = props.header?.split(',');
  const rows = props.header?.split(';');
console.log(rows);
  return (
    <>
      <table class="table-auto">
        <thead>
          <tr>
            {headers
              ? headers?.map((item) => (
                <>
                  <th>{item}</th>
                </>
              ))
              : null}


          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </>
  );
});

