using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace miBilletera.Models
{
    public class transaccionesModels
    {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ID_TRANS { get; set; }
    public string usuarioemisor { get; set; }="";
    public string usuarioreceptor { get; set; }="";
    public decimal monto { get; set; }
    public DateTime fechahora { get; set; }
    }
}