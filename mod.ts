import {
  parse,
} from "./deps.ts";

/**
 * Flags:
 * -h, --help 
 * -q={query}, --query={query}
 * 
 */

class SWIKI {
  static readonly BASE_URL = "https://id.wikipedia.org/wiki/";
  static readonly args = Deno.args;
  static readonly arg = parse(SWIKI.args);

  /**
     * print
     * console.log simplify
     * @param value 
     */
  print(value: string) {
    console.log(value);
  }

  /**
     * req
     * get source from url
     * @param query 
     */
  async req(query: string): Promise<string> {
    let res = await fetch(SWIKI.BASE_URL + query);

    let data = await res.text();

    return data;
  }

  /**
     * replace_all_html_tags
     * clean up html tag from source
     * @param source 
     */
  async replace_all_html_tags(source: string): Promise<string> {
    let regex = /(<([^>]+)>)/ig;
    let reference = /(\&\#91;(\w)+\&\#93;)/ig;

    return source.replace(regex, "").replace(reference, "");
  }

  /**
     * get_p_elements
     * get first p element in source, then split it
     * @param source 
     */
  async get_p_elemets(source: string): Promise<string> {
    let sstart = source.indexOf("<p>");
    let data = source.slice(sstart);

    return data;
  }

  /**
     * remove_attributes
     * remove attribute when exist
     * @param source 
     */
  async remove_attributes(source: string): Promise<string> {
    let result: string;
    let exist = await this.exist_element("</table>", source);

    if (exist) {
      result = source.split("</table>")[1];
    } else {
      result = source;
    }

    return result;
  }

  /**
     * formatTitle
     * Formating title to wikimediable
     * @param title 
     */
  formatTitle(title: string): string {
    title = title.toLowerCase().replace(" ", "_");
    title = title[0].toUpperCase() + title.slice(1);

    return title;
  }

  /**
     * exist_element
     * check attribute exist or not
     * @param target 
     * @param source 
     */
  async exist_element(target: string, source: string): Promise<boolean> {
    let num = source.indexOf(target);
    return (num == -1) ? false : true;
  }

  /**
     * parsing
     * Parse source to string readable
     * @param source 
     */
  async parsing(source: string): Promise<string> {
    let data: string;

    // spliting source code
    data = source.split('<div class="mw-parser-output">')[1];
    data =
      data.split(
        '<div id="toc" class="toc" role="navigation" aria-labelledby="mw-toc-heading">',
      )[0];

    // replacing attributes
    data = await this.remove_attributes(data);

    // get <p> elements
    data = await this.get_p_elemets(data);

    // clean up html tag
    data = await this.replace_all_html_tags(data);

    data = data.trim();

    return data;
  }

  /**
     * scrape
     * get definition from wikipedia
     * @param query 
     */
  async scrape(query: string): Promise<string> {
    let result: string;
    let source: string;
    let exist: boolean;

    query = this.formatTitle(query);
    source = await this.req(query);
    exist = await this.exist_element("mw-parser-output", source);

    if (exist) {
      result = await this.parsing(source);
    } else {
      result = "Definisi tidak ditemukan";
    }

    return result;
  }

  /**
     * gets
     * return args
     * @param target 
     */
  gets(target: string): string {
    let result: string;

    switch (target) {
      case "key":
        result = Object.keys(SWIKI.arg)[1];
        break;
      case "value":
        result = Object.values(SWIKI.arg)[1];
        break;
      default:
        result = "Pilihan tidak ditemukan";
        break;
    }

    return result;
  }

  async cli() {
    let key: string;
    let result: string;
    key = this.gets("key");

    switch (key) {
      case "q":
      case "query":
        result = await this.scrape(this.gets("value"));
        break;
      case "h":
      case "help":
      default:
        result =
          `Example : \n\tdeno wikia.ts --query="jam tangan"\n\tdeno wikia.ts --help`;
        break;
    }

    return result;
  }

  async web(query: string) {
    let result: string;
    result = await this.scrape(query);
    return result;
  }

  async run(query: any = undefined) {
    let result: string;
    let is_cli = (query == undefined) ? true : false;

    if (is_cli) {
      result = await this.cli();
    } else {
      result = await this.web(query);
    }

    return result;
  }
}

export {
  SWIKI,
};
