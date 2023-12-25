# Techguide:

## Estrutura de pastas: 🗂️
Hoje o projeto está estruturado seguindo como base alguns padrões de projetos React Native, tentando ao máximo dividir resposábilidades e separando
a aplicação em components. 
___

### Pastas: 📚
* src
    * @types
    * app
    * assests
    * components
    * hooks
    * models
    * routes
    * service
    * modules
       * home
         * components
         * hooks
         * interfaces
         * routes
         * screens
         * services

### OBS: 
Algumas pastas como a `@types` são por si só explicativas não sendo necessário um detalhamento maior do que ela engloba.

- src: 🎯
    -  A pasta src contém todo o core a implementação React Native.
    -  src é a pasta source de aplicação contendo todas as outras pastas citadas anteriormente.
    </br>

- service: 🤖
   -  A service ficou com a responsabilidade de lidar com a implementação do react-querry, gerando  a const client, e lidar com a chamada geral da API.
    </br>

- components: 🤓
    -  A components contém todos os components da aplicação.
    -  Além disso, considero que algo deve está dentro da components de acordo com sua utilização, ou seja, components que se repetem ou são usados em mais de uma parte do aplicativo 
    é indicado que fique dentro de components evitando assim uma reescrita de código, porém quando um component só é usado em um fluxo específico ele fica dentro da sua pasta de components no seu module.
    - components 
        - `Loading`
    </br>

- modules: 💻
    - Nessa estrutura de aplicação optei por dividir tudo em modules, que seriam os fluxos independentes da aplicação, ou seja tudo que envolve a home, por exemplo, está concentrado no seu module home, então temos uma estrutura de pastas específicas para esse fluxo.
    - Cada fluxo pode ser sua estrutura contanto que atenda suas necessidades.
    - home 
        - `./hooks`
        - `./components`
        - `./routes`
        - `./screens`
        - `./interfaces`
    </br>

- hooks: 👷‍♀️
    -  A pasta de hooks costumo deixar todos os contexts criados, nesse caso em especifico deixei o `useNavigation`, por uma necessidade de tratar types, e também o useLocation.
    -  o `useLocation` ficou responsável por realizar o tratamento das chamadas e também lidar com as fuções para permissão e captura de geolocalização.
    -  Cada module tem sua pasta de hooks que pode ser usada para algo unicamente específico daquele fluxo.
    </br>
