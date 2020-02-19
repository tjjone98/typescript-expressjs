class Logger {
  private log: any

  public successLog(log: any): any {
    return {
      status: 'success',
      payload: log,
    }
  }
  public errorLog(log: any): any {
    return {
      status: 'fail',
      payload: log,
    }
  }
}
export default new Logger()
