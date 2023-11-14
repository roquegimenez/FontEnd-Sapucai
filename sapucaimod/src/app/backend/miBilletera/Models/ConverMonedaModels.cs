using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace miBilletera.Models
{
    public class ConverMonedaModels
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string MonedaOrigen { get; set; }="";
        public string MonedaDestino { get; set; }="";
        public int Taza { get; set; }
        public DateTime FechaHora { get; set; }
    }
}