
export class LinkChopper {
  public static cropName(link: string, dirSeparator: string = '/') {
    let split = link.split(dirSeparator);
    const filename = split[split.length - 1];
    return filename;
  }

  public static cropDir(link: string, dirSeparator: string = '/') {
    let split = link.split(dirSeparator);
    split.splice(split.length - 2,1);
    return split;
  }
}
