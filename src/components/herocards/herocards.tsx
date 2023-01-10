import {
  component$,
  useContext,
  useStore,
  createContext,
  useContextProvider,
} from '@builder.io/qwik';
import { ImageWrapper } from '../imagewrapper/imagewrapper';


export interface SharedRouteState {
  data: MyRouteData [];
}

export interface MyRouteData{
  location:string;
  url:string;
  title:string;
  dateModified:string;
  dateCreated:string;
  twitterImage:string;
  image:string;
  imageSmall:string;
  imageLarge:string;
  description: string;

}
export const MyContext = createContext<SharedRouteState>('puzzledbycsharp.master.state');



export default component$(() => {
  const state = useStore<SharedRouteState>({
    data:  [{ 
      location:'', 
      url: 'https://puzzledbycsharp.com/',
      title:'Home Page | Puzzled By CSharp',
      dateCreated:'2021-12-24T00:08:56+00:00',
      dateModified:'2021-12-24T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/home/c-programming-insights-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/home/main-pinterest.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/home/main-pinterest.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/home/main-pinterest.webp',
      description:'This site was created for you to gain new insights into the C# programming language. There are a variety of how to articles, code snippets and practice code'
    },
    { 
      location:'fundamentals/collections/array-vs-list-vs-linked-list', 
      url: 'https://puzzledbycsharp.com/fundamentals/collections/array-vs-list-vs-linked-list/',
      title:'Array vs List vs Linked List | Puzzled By CSharp',
      dateCreated:'2021-12-24T00:08:56+00:00',
      dateModified:'2021-12-24T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/array-vs-list-vs-linked-list/array-vs-list-vs-linked-list-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/array-vs-list-vs-linked-list/array-vs-list-vs-linked-list-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/array-vs-list-vs-linked-list/array-vs-list-vs-linked-list-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/array-vs-list-vs-linked-list/array-vs-list-vs-linked-list-large.webp',
      description:'Array vs Lists vs Linked Lists are common collections, each pros and cons so it is important to understand these as we make our collection choices.'
    },
    { 
      location:'code-snippets/exceptions/default-parameter-value-not-compile-time-constant', 
      url: 'https://puzzledbycsharp.com/code-snippets/exceptions/default-parameter-value-not-compile-time-constant/',
      title:'Default Parameter Value Not Compile Time Constant Error',
      dateCreated:'2021-12-24T00:08:56+00:00',
      dateModified:'2021-12-24T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/code-snippets/default-parameter-value-not-compile-time-constant/parameter-value-not-compile-time-constant-error-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/code-snippets/default-parameter-value-not-compile-time-constant/parameter-value-not-compile-time-constant-error-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/code-snippets/default-parameter-value-not-compile-time-constant/parameter-value-not-compile-time-constant-error-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/code-snippets/default-parameter-value-not-compile-time-constant/parameter-value-not-compile-time-constant-error-large.webp',
      description:'The exception CS1736:Default parameter value must be a compile-time constant comes when assigning a optional parameter value is not a constant or default value.'
    },
    { 
      location:'fundamentals/collections/dictionary-best-practices-and-what-to-avoid', 
      url: 'https://puzzledbycsharp.com/fundamentals/collections/dictionary-best-practices-and-what-to-avoid/',
      title:'Dictionary Best Practices And What To Avoid | Puzzled By CSharp',
      dateCreated:'2021-12-24T00:08:56+00:00',
      dateModified:'2021-12-24T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/dictionary-best-practices-and-what-to-avoid/dictionary-best-practices-and-what-to-avoid-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/dictionary-best-practices-and-what-to-avoid/dictionary-best-practices-and-what-to-avoid-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/dictionary-best-practices-and-what-to-avoid/dictionary-best-practices-and-what-to-avoid-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/dictionary-best-practices-and-what-to-avoid/dictionary-best-practices-and-what-to-avoid-large.webp',
      description:'Dictionary using best practices with the right key, it scales well over large datasets. There are several pitfalls that should be avoided.'
    },
    { 
      location:'code-snippets/project-build/copy-files-via-project-script-on-build', 
      url: 'https://puzzledbycsharp.com/code-snippets/project-build/copy-files-via-project-script-on-build/',
      title:'Copying Files via Project Script On Build | Puzzled By CSharp',
      dateCreated:'2021-12-24T00:08:56+00:00',
      dateModified:'2021-12-24T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/code-snippets/project-build/copy-files-via-project-script-on-build/copying-files-via-project-script-on-build-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/code-snippets/project-build/copy-files-via-project-script-on-build/copying-files-via-project-script-on-build-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/code-snippets/project-build/copy-files-via-project-script-on-build/copying-files-via-project-script-on-build-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/code-snippets/project-build/copy-files-via-project-script-on-build/copying-files-via-project-script-on-build-large.webp',
      description:'One way to copy files to output folder is to edit the .csproj file and add a command copy files from a certain directory into the output folder.'
    },
    { 
      location:'fundamentals/collections/list-vs-dictionary', 
      url: 'https://puzzledbycsharp.com/fundamentals/collections/list-vs-dictionary/',
      title:'List vs Dictionary Collection Types',
      dateCreated:'2021-12-24T00:08:56+00:00',
      dateModified:'2021-12-24T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/collections/list-vs-dictionary/list-vs-dictionary-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/collections/list-vs-dictionary/list-vs-dictionary-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/collections/list-vs-dictionary/list-vs-dictionary-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/collections/list-vs-dictionary/list-vs-dictionary-large.webp',
      description:'List and Dictionary are useful collection types. They are accessibility and convenient to use. There are advantages over an array or hash tables.'
    },
    { 
      location:'code-snippets/project-build/identify-dll-is-x86-or-x64', 
      url: 'https://puzzledbycsharp.com/code-snippets/project-build/identify-dll-is-x86-or-x64/',
      title:'Identify If a DLL is 32bit or 64bit | Puzzled By CSharp',
      dateCreated:'2021-12-24T00:08:56+00:00',
      dateModified:'2021-12-24T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/code-snippets/project-build/copy-files-via-project-script-on-build/find-if-32bit-or-64bit-dll-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/code-snippets/project-build/copy-files-via-project-script-on-build/find-if-32bit-or-64bit-dll-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/code-snippets/project-build/copy-files-via-project-script-on-build/find-if-32bit-or-64bit-dll-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/code-snippets/project-build/copy-files-via-project-script-on-build/find-if-32bit-or-64bit-dll-large.webp',
      description:'Want to find out if a DLL or assembly is targeting 32bit or 64bit then Visual Studio comes with handy tool called Corflags accessed by the command prompt.'
    },
    { 
      location:'code-snippets/hex-string-to-int', 
      url: 'https://puzzledbycsharp.com/code-snippets/hex-string-to-int/',
      title:'Hex String to Int | Puzzled By CSharp',
      dateCreated:'2021-12-24T00:08:56+00:00',
      dateModified:'2021-12-24T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/code-snippets/hex-to-string/hex-to-string-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/code-snippets/hex-to-string/hex-to-string-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/code-snippets/hex-to-string/hex-to-string-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/code-snippets/hex-to-string/hex-to-string-large.webp',
      description:'Hex is a base 16 number system and the C# has build in function that can convert a string hex value into a int value.'
    },
    { 
      location:'fundamentals/strings/string-vs-stringbuilder-comparison', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/string-vs-stringbuilder-comparison/',
      title:'String vs StringBuilder Comparison | Puzzled By CSharp',
      dateCreated:'2021-12-24T00:08:56+00:00',
      dateModified:'2021-12-24T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/string-vs-stringbuilder-comparison-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/string-vs-stringbuilder-comparison-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/string-vs-stringbuilder-comparison-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/string-vs-stringbuilder-comparison-large.webp',
      description:'String vs StringBuilder are similar and in most cases we will use string but we need a more efficient option in StringBuilder.'
    },
    { 
      location:'code-snippets/open-file-programmatically', 
      url: 'https://puzzledbycsharp.com/code-snippets/open-file-programmatically/',
      title:'Open File Programmatically | Puzzled By CSharp',
      dateCreated:'2021-12-24T00:08:56+00:00',
      dateModified:'2021-12-24T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/code-snippets/open-file-programmatically/open-a-file-programmatically-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/code-snippets/open-file-programmatically/open-a-file-programmatically-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/code-snippets/open-file-programmatically/open-a-file-programmatically-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/code-snippets/open-file-programmatically/open-a-file-programmatically-large.webp',
      description:'When testing or writing programs that generate files you may want automate opening the file in code than manually opening those files.'
    },
    { 
      location:'fundamentals/strings/new-line-in-stringbuilder', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/new-line-in-stringbuilder/',
      title:'New Line in StringBuilder | Puzzled By CSharp',
      dateCreated:'2021-12-24T00:08:56+00:00',
      dateModified:'2021-12-24T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/new-line-in-stringbuilder-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/new-line-in-stringbuilder-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/new-line-in-stringbuilder-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/new-line-in-stringbuilder-large.webp',
      description:'New line is a special sequences that can be inserted into a string. Represented as backslash n this works as if you pressed return on the keyboard.'
    },
    { 
      location:'fundamentals/strings/string-substring', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/string-substring/',
      title:'How to Use Substring | Puzzled By CSharp',
      dateCreated:'2022-03-24T00:08:56+00:00',
      dateModified:'2022-03-24T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/string-substring-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/string-substring-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/string-substring-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/string-substring-large.webp',
      description:'Substring is a function for copying a chunk of an existing string. It returns a sub section of the original string and depends on the selected index range.'
    },
    { 
      location:'fundamentals/strings/string-insert', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/string-insert/',
      title:'Using String Insert Effectively | Puzzled By CSharp',
      dateCreated:'2022-05-09T00:08:56+00:00',
      dateModified:'2022-05-09T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/insert/string-insert-page-banner-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/insert/string-insert-page-banner-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/insert/string-insert-page-banner-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/insert/string-insert-page-banner-large.webp',
      description:'String insert puts a single string between a section of the string. With the first parameter of index of insert and second parameter is the string to insert.'
    },
    { 
      location:'fundamentals/strings/string-remove', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/string-remove/',
      title:'Best Ways To Use String Remove | Puzzled By CSharp',
      dateCreated:'2022-05-09T00:08:56+00:00',
      dateModified:'2022-05-09T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/remove/string-remove-page-header-banner-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/remove/string-remove-page-header-banner-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/remove/string-remove-page-header-banner-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/remove/string-remove-page-header-banner-large.webp',
      description:'String remove takes an existing string and based on the start index and length for removal then will return a string with that section removed.'
    },
    { 
      location:'fundamentals/strings/string-trim', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/string-trim/',
      title:'Walkthrough of the String Trim Function | Puzzled By CSharp',
      dateCreated:'2022-05-22T00:08:56+00:00',
      dateModified:'2022-05-22T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/trim/string-trim-page-header-banner-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/trim/string-trim-page-header-banner-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/trim/string-trim-page-header-banner-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/trim/string-trim-page-header-banner-large.webp',
      description:'String trim removes space, tabs and various lengths of whitespace at the beginning or end of a string. This is good for user inputs.'
    },
    { 
      location:'fundamentals/strings/string-equals', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/string-equals/',
      title:'Examining String Equals In Detail | Puzzled By CSharp',
      dateCreated:'2022-06-15T00:08:56+00:00',
      dateModified:'2022-06-15T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/equals/string-equals-page-header-banner-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/equals/string-equals-page-header-banner-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/equals/string-equals-page-header-banner-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/equals/string-equals-page-header-banner-large.webp',
      description:'String Equals compares two string to find out if they are exactly the same. The compare is case sensitive and usually used in conditional statements.'
    },
    { 
      location:'fundamentals/strings/string-replace', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/string-replace/',
      title:'String Replace In Depth | Puzzled By CSharp',
      dateCreated:'2022-06-15T00:08:56+00:00',
      dateModified:'2022-06-15T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/replace/string-replace-page-header-banner-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/replace/string-replace-page-header-banner-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/replace/string-replace-page-header-banner-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/replace/string-replace-page-header-banner-large.webp',
      description:'String replace is a string and character substitute with another string. It finds the characters then replaces it a new set of characters'
    },
    { 
      location:'fundamentals/strings/string-substring/get-a-substring-before-or-after-a-certain-character', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/string-substring/get-a-substring-before-or-after-a-certain-character/',
      title:'Get A Substring Before Or After A Certain Character',
      dateCreated:'2022-06-26T00:08:56+00:00',
      dateModified:'2022-06-26T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/get-a-substring-before-or-after-a-certain-character/get-a-substring-before-or-after-a-certain-character-page-header-banner-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/get-a-substring-before-or-after-a-certain-character/get-a-substring-before-or-after-a-certain-character-page-header-banner-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/get-a-substring-before-or-after-a-certain-character/get-a-substring-before-or-after-a-certain-character-page-header-banner-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/get-a-substring-before-or-after-a-certain-character/get-a-substring-before-or-after-a-certain-character-page-header-banner-large.webp',
      description:'Getting a substring before or after a certain character is common in parsing strings, user data, database data, automatic data generated by scripts.'
    },    { 
      location:'fundamentals/strings/string-substring/best-first-character-removal-function-in-a-string', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/string-substring/best-first-character-removal-function-in-a-string/',
      title:'Best First Character Removal Function In A String | Puzzled By CSharp',
      dateCreated:'2022-07-23T00:08:56+00:00',
      dateModified:'2022-07-23T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/best-first-character-removal-function-in-a-string/best-first-character-removal-function-in-a-string-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/best-first-character-removal-function-in-a-string/best-first-character-removal-function-in-a-string-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/best-first-character-removal-function-in-a-string/best-first-character-removal-function-in-a-string-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/best-first-character-removal-function-in-a-string/best-first-character-removal-function-in-a-string-large.webp',
      description:'Span Slice came at the fastest first character removal method at about half a second while substring, range operator, remove, and trim start were pretty fast.'
    },    { 
      location:'fundamentals/strings/string-remove/efficiently-remove-the-first-keyword-occurrence-from-a-string', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/string-remove/efficiently-remove-the-first-keyword-occurrence-from-a-string/',
      title:'Efficiently Remove The First Keyword Occurrence From A String',
      dateCreated:'2022-07-23T00:08:56+00:00',
      dateModified:'2022-07-23T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/remove/efficiently-remove-the-first-keyword-occurrence-from-a-string/efficiently-remove-the-first-keyword-occurrence-from-a-string-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/remove/efficiently-remove-the-first-keyword-occurrence-from-a-string/efficiently-remove-the-first-keyword-occurrence-from-a-string-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/remove/efficiently-remove-the-first-keyword-occurrence-from-a-string/efficiently-remove-the-first-keyword-occurrence-from-a-string-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/remove/efficiently-remove-the-first-keyword-occurrence-from-a-string/efficiently-remove-the-first-keyword-occurrence-from-a-string-large.webp',
      description:'Data can have duplicated and errors can be in the inputs and fields and it is important to efficiently removing the first keyword occurrence from a string'
    },    { 
      location:'fundamentals/strings/string-substring/get-substring-after-finding-a-keyword', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/string-substring/get-substring-after-finding-a-keyword/',
      title:'Get Substring After Finding A Keyword | Puzzled By CSharp',
      dateCreated:'2022-08-01T00:08:56+00:00',
      dateModified:'2022-08-01T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/get-substring-after-finding-a-keyword/get-substring-after-finding-a-keyword-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/get-substring-after-finding-a-keyword/get-substring-after-finding-a-keyword-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/get-substring-after-finding-a-keyword/get-substring-after-finding-a-keyword-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/get-substring-after-finding-a-keyword/get-substring-after-finding-a-keyword-large.webp',
      description:'The overall best way to solve getting a substring after finding a keyword is with Span Slice because of the huge performance gain.'
    },    { 
      location:'fundamentals/strings/string-substring/how-best-to-get-last-n-characters', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/string-substring/how-best-to-get-last-n-characters/',
      title:'How Best To Get Last N Characters | Puzzled By CSharp',
      dateCreated:'2022-08-02T00:08:56+00:00',
      dateModified:'2022-08-02T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/how-best-to-get-last-n-characters/how-best-to-get-last-n-characters-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/how-best-to-get-last-n-characters/how-best-to-get-last-n-characters-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/how-best-to-get-last-n-characters/how-best-to-get-last-n-characters-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/how-best-to-get-last-n-characters/how-best-to-get-last-n-characters-large.webp',
      description:'Best way to get last n characters is to use string substring. It has one of the fastest methods and readable so you don\'t have to guess what it does.'
    },    { 
      location:'fundamentals/strings/string-substring/analysis-of-getting-first-n-characters-methods', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/string-substring/analysis-of-getting-first-n-characters-methods/',
      title:'Analysis Of Getting First N Characters Methods | Puzzled By CSharp',
      dateCreated:'2022-08-06T00:08:56+00:00',
      dateModified:'2022-08-06T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/analysis-of-getting-first-n-characters-methods/analysis-of-getting-first-n-characters-methods-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/analysis-of-getting-first-n-characters-methods/analysis-of-getting-first-n-characters-methods-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/analysis-of-getting-first-n-characters-methods/analysis-of-getting-first-n-characters-methods-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/analysis-of-getting-first-n-characters-methods/analysis-of-getting-first-n-characters-methods-large.webp',
      description:'The best method for getting the first n characters is span slice. Performance is the best metric to determine to which is best because it affects the end users.'
    },    { 
      location:'fundamentals/strings/string-substring/get-a-substring-between-two-strings', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/string-substring/get-a-substring-between-two-strings/',
      title:'Get A Substring Between Two Strings | Puzzled By CSharp',
      dateCreated:'2022-08-09T00:08:56+00:00',
      dateModified:'2022-08-09T00:08:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/get-a-substring-between-two-strings/get-a-substring-between-two-strings-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/get-a-substring-between-two-strings/get-a-substring-between-two-strings-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/get-a-substring-between-two-strings/get-a-substring-between-two-strings-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/substring/get-a-substring-between-two-strings/get-a-substring-between-two-strings-large.webp',
      description:'The most effective function for getting a substring between two strings is span slice. Speed is important factor because that has the impacts on the end user.'
    },    { 
      location:'fundamentals/collections/list/functional-look-at-list', 
      url: 'https://puzzledbycsharp.com/fundamentals/collections/list/functional-look-at-list/',
      title:'A Functional Look At List | Puzzled By CSharp',
      dateCreated:'2022-08-23T00:11:56+00:00',
      dateModified:'2022-08-23T00:11:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/a-functional-look-at-list-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/a-functional-look-at-list-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/a-functional-look-at-list-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/a-functional-look-at-list-large.webp',
      description:'List is a one of the most use collections and for good reason. When working with data it is a natural fit to add them to lists.'
    },    { 
      location:'fundamentals/collections/list/best-way-to-sort-a-list', 
      url: 'https://puzzledbycsharp.com/fundamentals/collections/list/best-way-to-sort-a-list/',
      title:'Best Way To Sort A List | Puzzled By CSharp',
      dateCreated:'2022-08-26T00:11:56+00:00',
      dateModified:'2022-08-26T00:11:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/best-way-to-sort-a-list/best-way-to-sort-a-list-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/best-way-to-sort-a-list/best-way-to-sort-a-list-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/best-way-to-sort-a-list/best-way-to-sort-a-list-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/best-way-to-sort-a-list/best-way-to-sort-a-list-large.webp',
      description:'The best sorting method in C# is LINQ\'s order by function. It is the fastest method and it is compact.'
    },    { 
      location:'fundamentals/collections/list/access-items-from-a-list-by-index', 
      url: 'https://puzzledbycsharp.com/fundamentals/collections/list/access-items-from-a-list-by-index/',
      title:'Access Items From A List By Index | Puzzled By CSharp',
      dateCreated:'2022-08-26T00:11:56+00:00',
      dateModified:'2022-08-26T00:11:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/access-items-from-a-list-by-index/access-items-from-a-list-by-index-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/access-items-from-a-list-by-index/access-items-from-a-list-by-index-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/access-items-from-a-list-by-index/access-items-from-a-list-by-index-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/access-items-from-a-list-by-index/access-items-from-a-list-by-index-large.webp',
      description:'The best way to access an item of a list is to use the Indexer property. It is extremely fast and once used to the syntax, it becomes a go to property'
    },    { 
      location:'fundamentals/collections/list/how-to-initialize-a-list', 
      url: 'https://puzzledbycsharp.com/fundamentals/collections/list/how-to-initialize-a-list/',
      title:'How To Initialize A List | Puzzled By CSharp',
      dateCreated:'2022-08-31T00:11:56+00:00',
      dateModified:'2022-08-31T00:11:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/how-to-initialize-a-list/how-to-initialize-a-list-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/how-to-initialize-a-list/how-to-initialize-a-list-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/how-to-initialize-a-list/how-to-initialize-a-list-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/how-to-initialize-a-list/how-to-initialize-a-list-large.webp',
      description:'Initializing the list using the in line method is best used when there are only a few items and also where the list won\'t change much very often.'
    },    { 
      location:'fundamentals/collections/list/convert-list-to-string-with-a-delimiter', 
      url: 'https://puzzledbycsharp.com/fundamentals/collections/list/convert-list-to-string-with-a-delimiter/',
      title:'Convert A List To String With A Delimiter',
      dateCreated:'2022-09-02T00:11:56+00:00',
      dateModified:'2022-09-02T00:11:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/convert-list-to-string-with-a-delimiter/convert-list-to-string-with-a-delimiter-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/convert-list-to-string-with-a-delimiter/convert-list-to-string-with-a-delimiter-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/convert-list-to-string-with-a-delimiter/convert-list-to-string-with-a-delimiter-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/convert-list-to-string-with-a-delimiter/convert-list-to-string-with-a-delimiter-large.webp',
      description:'The best method to convert a list to a string with a delimiter is the string join method. It is by far the fastest, it is compact and also easy to setup.'
    },  
    { 
      location:'fundamentals/collections/list/how-to-find-an-item-in-the-list', 
      url: 'https://puzzledbycsharp.com/fundamentals/collections/list/how-to-find-an-item-in-the-list/',
      title:'How To Find An Item In The List | Puzzled By CSharp',
      dateCreated:'2022-09-06T00:11:56+00:00',
      dateModified:'2022-09-06T00:11:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/how-to-find-an-item-in-the-list/how-to-find-an-item-in-the-list-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/how-to-find-an-item-in-the-list/how-to-find-an-item-in-the-list-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/how-to-find-an-item-in-the-list/how-to-find-an-item-in-the-list-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/how-to-find-an-item-in-the-list/how-to-find-an-item-in-the-list-large.webp',
      description:'The best method for finding an item in a list is the List Find method, however, the best collection type for finding an item is the dictionary.'
    },
    { 
      location:'about', 
      url: 'https://puzzledbycsharp.com/about/',
      title:'About | Puzzled By CSharp',
      dateCreated:'2022-10-02T00:11:56+00:00',
      dateModified:'2022-10-02T00:11:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/about.webp',
      image:'https://puzzledbycsharp.com/assets/about-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/about-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/about-large.webp',
      description:'I&#8217;m a software engineer with nine years of experience. This site is intended for programmers from all skill set levels in C#/CSharp programming language.'
    },  
    { 
      location:'fundamentals/collections/list/clone-a-list-in-depth-review', 
      url: 'https://puzzledbycsharp.com/fundamentals/collections/list/clone-a-list-in-depth-review/',
      title:'Clone A List In Depth Review | Puzzled By CSharp',
      dateCreated:'2022-12-23T00:11:56+00:00',
      dateModified:'2022-12-23T00:11:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/clone-a-list-in-depth-review/clone-a-list-in-depth-review-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/clone-a-list-in-depth-review/clone-a-list-in-depth-review-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/clone-a-list-in-depth-review/clone-a-list-in-depth-review-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/clone-a-list-in-depth-review/clone-a-list-in-depth-review-large.webp',
      description:'Cloning a list is matter of understanding the differences in shallow, deep copies and the difference between value and reference types.'
    }
    ,  
    { 
      location:'fundamentals/collections/collections', 
      url: 'https://puzzledbycsharp.com/fundamentals/collections/',
      title:'Collections | Puzzled By CSharp',
      dateCreated:'2022-12-23T00:11:56+00:00',
      dateModified:'2022-12-23T00:11:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/collections/collections-banner-image-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/collections/collections-banner-image-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/collections/collections-banner-image-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/collections/collections-banner-image-large.webp',
      description:'Collections are an essential data type in csharp. It is one the most used types because data must be ordered, organized and then used in an efficient manner.'
    }
    ,{ 
      location:'fundamentals/collections/collections/list', 
      url: 'https://puzzledbycsharp.com/fundamentals/collections/list/',
      title:'List | Puzzled By CSharp',
      dateCreated:'2022-12-23T00:11:56+00:00',
      dateModified:'2022-12-23T00:11:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/list-banner-image-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/list-banner-image-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/list-banner-image-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/list-banner-image-large.webp',
      description:'List are the backbone of collections and often the most used. They are versatile and flexible, they increase and decrease the underline array automatically.'
    }
    ,{ 
      location:'fundamentals/strings', 
      url: 'https://puzzledbycsharp.com/fundamentals/strings/',
      title:'Strings | Puzzled By CSharp',
      dateCreated:'2022-12-23T00:11:56+00:00',
      dateModified:'2022-12-23T00:11:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/strings/strings-banner-image-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/strings/strings-banner-image-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/strings/strings-banner-image-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/strings/strings-banner-image-large.webp',
      description:'Strings are some of the first data types to learn in the csharp so it becomes important to manipulate strings, and to parsing strings'
    }
    ,{ 
      location:'code-snippets', 
      url: 'https://puzzledbycsharp.com/code-snippets/',
      title:'Code Snippets | Puzzled By CSharp',
      dateCreated:'2022-12-23T00:11:56+00:00',
      dateModified:'2022-12-23T00:11:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/code-snippets/code-snippets-banner-image-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/code-snippets/code-snippets-banner-image-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/code-snippets/code-snippets-banner-image-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/code-snippets/code-snippets-banner-image-large.webp',
      description:'Code snippet is is sections of brief code and explanation that could be useful to you for simple yet fundamental issues that could arise.'
    } 
     ,
     { 
      location:'fundamentals/collections/list/remove-duplicate-items-from-a-list', 
      url: 'https://puzzledbycsharp.com/fundamentals/collections/list/remove-duplicate-items-from-a-list/',
      title:'Remove Duplicate Items from A List | Puzzled By CSharp',
      dateCreated:'2022-12-30T00:11:56+00:00',
      dateModified:'2022-12-30T00:11:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/remove-duplicate-items-from-a-list/remove-duplicate-items-from-a-list-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/remove-duplicate-items-from-a-list/remove-duplicate-items-from-a-list-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/remove-duplicate-items-from-a-list/remove-duplicate-items-from-a-list-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/remove-duplicate-items-from-a-list/remove-duplicate-items-from-a-list-large.webp',
      description:'The best method for getting unique items from a list is to use a combination of HashSet and List. It has good performance and the order the items is preserved.'
    } 
    ,
    { 
      location:'fundamentals/collections/list/understanding-the-best-set-theory-methods-between-lists', 
      url: 'https://puzzledbycsharp.com/fundamentals/collections/list/understanding-the-best-set-theory-methods-between-lists/',
      title:'Understanding The Best Set Theory Methods Between Lists',
      dateCreated:'2023-01-08T00:11:56+00:00',
      dateModified:'2023-01-08T00:11:56+00:00',
      twitterImage:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/understanding-the-best-set-theory-methods-between-lists/understanding-the-best-set-theory-methods-between-lists-twitter.webp',
      image:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/understanding-the-best-set-theory-methods-between-lists/understanding-the-best-set-theory-methods-between-lists-medium.webp',
      imageSmall:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/understanding-the-best-set-theory-methods-between-lists/understanding-the-best-set-theory-methods-between-lists-small.webp',
      imageLarge:'https://puzzledbycsharp.com/assets/fundamentals/collections/list/understanding-the-best-set-theory-methods-between-lists/understanding-the-best-set-theory-methods-between-lists-large.webp',
      description:'The best methods for intersect, union and except are with the HashSet collection type. The HashSet functions are faster than LINQs.'
    }
  
  ]
  });

  useContextProvider(MyContext, state);
  return (
    <>
      <Child />
    </>

  );
});

export const Child = component$(() => {
  const state = useContext(MyContext); // type of "state" will be `SharedState`
  const updatedState = filterMetaData(state.data);
  return (
<>
<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

    {updatedState
      ? updatedState?.map((item) => (

        <>
        
<div class="max-w-sm bg-customdark1 border border-customdark2 rounded-lg shadow-md mx-auto">
    <a href={item.url}  aria-label={item.title.replace(" | Puzzled By CSharp", "") + " Link"}>
        {/* <img class="rounded-t-lg" src={item.image} alt={item.title + " Image"}  /> */}

        <ImageWrapper imageSource={item.image} imageSrcSet={item.imageSmall +" 250w, "+ item.image + " 500w, " +item.imageLarge +" 1000w "} imageSizes="(max-width: 250px) 80vw, (max-width: 500px) 25vw, (max-width: 1000px) 10vw" altImage = {item.title.replace(" | Puzzled By CSharp", "") + " Image"} widthImage = "6000" heightImage = "4000" classInfo='rounded-t-lg'/>

    </a>
    <div class="p-5">
        <a href={item.url} aria-label={item.title.replace(" | Puzzled By CSharp", "") + " Link"}>
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title.replace(" | Puzzled By CSharp", "")}</h3>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
        <a href={item.url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center border-2 bg-customdark1  hover:bg-customdark6 hover:text-customdark5 px-5 mx-3 lg:mx-0 text-sm leading-5 rounded-md font-semibold text-customdark7 duration-300" aria-label={item.title.replace(" | Puzzled By CSharp", "") + " Link"}>
            Read more in article
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
    </>
    
  ))
  : null}

  
  </div>

  </>
  );
});

export function filterMetaData(routeDatas:  MyRouteData []) {
  const newArray : MyRouteData [] = [];
  routeDatas.sort((a, b) => a.dateModified > b.dateModified ? -1 : a.dateModified < b.dateModified ? 1 : 0);
  for (const routeData of routeDatas) {
if(routeData.location === 'about' || routeData.location === '')
{
  continue;
}
  newArray.push(routeData);
}    
  
  return newArray;
}