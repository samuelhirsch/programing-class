namespace quiz {
    internal class shirts {
        public string colors { get; set; }
        public string patterns { get; set; }

        public shirts(string colors, string patterns) {
            this.colors = colors;
            this.patterns = patterns;
        }

        public override string? ToString() {
            return $"{colors}:{patterns}";
        }
    }
}
