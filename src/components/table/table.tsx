import { component$ } from '@builder.io/qwik';

interface TableProps {
  header?: string;
  rows?: string;
}



export const Table = component$((props: TableProps) => {

  const headers = props.header?.split(',');
  const rows = props.rows?.split(';');
  let firstRowSplitCount = 0;
  if(rows && rows.length > 0)
  {

    firstRowSplitCount = rows[0].split(',').length;
  }
  //console.log("firstRowSplitCount:"+firstRowSplitCount);
let first = 0;
// console.log("headers:"+headers);
// console.log("rows:"+rows);
// console.log("rowslength:"+rows?.length);
  return (
    <>
    <div class="px-4 py-8 sm:px-8 overflow-x-auto relative">
      <table class="border-collapse w-full bg-customdark1 text-sm text-left">
        <thead class="bg-customdark3 text-xs uppercase">
          <tr>
            <>
            {headers
              ? headers?.map((item, i) => (
                  <th key={i} scope="col"  class="border-b-customdark2 font-semibold py-3 px-6">{item}</th>
                  ))
                  : null}
                  </>
          </tr>
        </thead>
        <tbody>

          <>
        {rows
              ? rows?.map((row, r) => (
                
                          <tr key={r} class="border border-b-customdark2 border-t-customdark1 border-r-customdark1 border-l-customdark1 py-4 px-6 hover:bg-customdark3 hover:border-l-customdark3 hover:border-r-customdark3 duration-300">
        {row
          ? row.split(',').map((col, c) => (
           
            <td key={c} scope={first++ % firstRowSplitCount == 0 ? "row" : "" } class=" py-4 px-6">{col}</td>
            ))
            : null}
              </tr>
           
              ))
              : null}
              </>

            

        </tbody>
      </table>
      </div>
    </>
  );
});

{/* <table class="w-full text-left border-collapse overflow-x-auto relative">
  <thead>
    <tr>
      <th class="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
        <div class="py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20">
          Class
        </div>
        </th>
        <th class="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
          <div class="py-2 pl-2 border-b border-slate-200 dark:border-slate-400/20">
            Properties
            </div></th></tr></thead><tbody class="align-baseline"><tr><td translate="no" class="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400">border-collapse</td><td translate="no" class="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300">border-collapse<!-- -->: <!-- -->collapse<!-- -->;<!-- -->
</td></tr><tr><td translate="no" class="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10">border-separate</td><td translate="no" class="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10">border-collapse<!-- -->: <!-- -->separate<!-- -->;<!-- -->
</td></tr></tbody></table> */}