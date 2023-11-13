using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations.Schema;

namespace miBilletera.Models
{
    public class b_virtual
    {
           [Key]
          [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
                public int ID_BV { get; set; }
        public string moneda { get; set; }="";
        public string saldo { get; set; }="";
        public string moneda_adquirida { get; set; }="";
        public decimal saldo_adquirido { get; set; }
    }
}