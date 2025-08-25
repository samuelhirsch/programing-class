namespace quiz {
    internal class Program {
        static void Main(string[] args) {
            string[] colors = { "red", "green", "blue" };
            string[] pattern = { "striped", "cheked", "plain" };
            List<shirts> shirt = new List<shirts>();
            foreach (string color in colors) {
                foreach (string patter in pattern) {
                    shirt.Add(new shirts(color,patter));
                }
            }
            foreach(shirts shirts in shirt) {
                Console.WriteLine(shirts);
            }
        }
    }
}
